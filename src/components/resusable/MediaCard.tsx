import { StoriesData } from "@/models/StoriesModel";

interface MediaCardProps {
  reel: StoriesData;
}

const MediaCard = ({ reel }: MediaCardProps) => {
  const getMedia = () => {
    if (reel) {
      const { type, url } = reel;
      if (type === "video") {
        return (
          <video
            src={url}
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        );
      }

      if (type === "image" && url) {
        return <img src={url} className="w-full h-full object-contain" />;
      }
    }
  };

  return <>{getMedia()}</>;
};

export default MediaCard;
