import React from "react";
import Image from "next/image";
import Avatar from "./resusable/Avatar";
import { UserProfile } from "@/models/StoriesModel";

interface StoryProps {
  handleStoryClick?: () => void;
  reels: UserProfile;
}

const Story = ({ handleStoryClick, reels }: StoryProps) => {
  return (
    <div className="my-4" onClick={handleStoryClick}>
      <Avatar url={reels.profile_img} alt="user-profile" />
      <p className="text-xs w-14 truncate mt-1">{reels.name}</p>
    </div>
  );
};

export default Story;
