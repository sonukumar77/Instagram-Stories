import { MediaType } from "@/constants";

export interface StoriesData {
  url: string;
  type: MediaType;
  created_at: string;
}

export interface UserProfile {
  id: number;
  name: string;
  profile_img: string;
  is_verified: boolean;
  created_at: string;
  reels: StoriesData[];
}
