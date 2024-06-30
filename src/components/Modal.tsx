import React, { ReactNode, useState } from "react";
import MediaCard from "./resusable/MediaCard";
import CrossIcon from "./icons/CrossIcon";
import Avatar from "./resusable/Avatar";
import VerifiedIcon from "./icons/VerifiedIcon";
import { UserProfile } from "@/models/StoriesModel";
import { DefaultAvatar, STORY_DELAY } from "@/constants";
import Stepper from "./resusable/Stepper";
import { calculateWidth } from "@/utils/utilityLogic";
import ProgressBar from "./resusable/ProgressBar";
import moment from "moment";

interface modalProps {
  children?: ReactNode;
  onClose: () => void;
  currentStory: UserProfile | null;
  handleLeftSideClick: () => void;
  handleRightSideClick: () => void;
  currentIndex: number;
}

const Modal = ({
  onClose,
  currentStory,
  handleLeftSideClick,
  handleRightSideClick,
  currentIndex,
}: modalProps) => {
  if (currentStory) {
    const { name, profile_img, is_verified, reels, created_at } = currentStory;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 min-h-screen p-2">
        <div className="bg-transparent h-full max-w-screen-sm min-w-80 sm:w-full m-auto rounded-[50px] overflow-y-auto relative">
          <div className="h-full max-w-screen-sm min-w-80 sm:w-full m-auto relative">
            <MediaCard reel={reels[currentIndex]} />
          </div>

          <div className="absolute top-0 right-0 bg-transparent w-full h-full">
            <div className="w-full bottom-2 flex space-x-1 mt-4 px-6 py-2">
              {reels.map((item, i) =>
                currentIndex == i ? (
                  <ProgressBar
                    key={item.id}
                    duration={STORY_DELAY}
                    onComplete={() => null}
                    className={`${calculateWidth(reels.length)}`}
                  />
                ) : (
                  <Stepper
                    key={item.id}
                    className={`${calculateWidth(reels.length)} ${
                      currentIndex === i ? "bg-white" : "bg-gray-700"
                    }`}
                  />
                )
              )}
            </div>

            <div className="flex justify-between items-center mt-2 px-2">
              <div className="flex justify-center items-center space-x-1">
                <Avatar
                  url={profile_img || DefaultAvatar}
                  alt={name}
                  className="border-transparent w-10 h-10"
                />
                <p className="text-xs w-14 truncate mt-1 text-white">{name}</p>
                {is_verified ? (
                  <VerifiedIcon
                    svgProps={{ width: 16, height: 16, fill: "white" }}
                  />
                ) : null}
                {created_at ? (
                  <span className="text-xs text-white">
                    {moment(reels[currentIndex].created_at).fromNow()}
                  </span>
                ) : null}
              </div>
              <button
                className="text-white text-2xl cursor-pointer py-2"
                onClick={onClose}
              >
                <CrossIcon className="fill-red-700 stroke-white w-6 h-6" />
              </button>
            </div>
            {/* next prev button on reels */}
            <div className="w-full h-5/6 flex justify-between">
              <div
                className="w-1/3 cursor-pointer"
                onClick={handleLeftSideClick}
              />
              <div
                className="w-1/3 cursor-pointer"
                onClick={handleRightSideClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
