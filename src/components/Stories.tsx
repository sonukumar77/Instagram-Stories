import React, { useEffect, useState } from "react";
import Story from "./Story";
import Modal from "./Modal";
import { STORY_DELAY } from "@/constants";
import useStories from "@/hooks/useStories";
import { UserProfile } from "@/models/StoriesModel";
import Spinner from "./resusable/Spinner";

const Stories = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentStory, setCurrentStory] = useState<UserProfile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { stories, loaderRef, hasMore } = useStories();

  const handleCloseModal = () => {
    setVisible(false);
    setCurrentStory(null);
    setCurrentIndex(0);
  };

  const handleStory = (item: UserProfile) => {
    setVisible(true);
    setCurrentStory(item);
  };

  const handleLeftSideClick = () => {
    if (currentIndex === 0) {
      setVisible(false);
      setCurrentStory(null);
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRightSideClick = () => {
    if (currentStory) {
      if (currentIndex === currentStory.reels.length - 1) {
        setVisible(false);
        setCurrentStory(null);
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleRightSideClick();
    }, STORY_DELAY);

    return () => clearTimeout(timerId);
  }, [currentIndex, currentStory]);

  return (
    <div className="h-full max-w-screen-sm min-w-80 sm:w-full m-auto shadow-md bg-white rounded-[50px] p-4">
      <h1 className="text-3xl">Instagram</h1>
      <div className="flex space-x-2 overflow-x-auto hide-scrollbar border-b-[1px] px-1 border-gray-400">
        {stories.map((item, i) => (
          <Story
            key={item.id}
            handleStoryClick={() => handleStory(item)}
            reels={item}
          />
        ))}
        <div ref={loaderRef} className="flex justify-center items-center">
          {hasMore ? (
            <Spinner />
          ) : (
            <div className="text-xs truncate">No more data..</div>
          )}
        </div>
      </div>
      {visible && (
        <Modal
          onClose={handleCloseModal}
          currentStory={currentStory}
          currentIndex={currentIndex}
          handleLeftSideClick={handleLeftSideClick}
          handleRightSideClick={handleRightSideClick}
        />
      )}
    </div>
  );
};

export default Stories;
