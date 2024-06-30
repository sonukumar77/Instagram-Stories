import { ReactNode, useState } from "react";

interface LazyImageProps {
  fallBackIcon?: ReactNode;
  imageUrl?: string | null;
  imgStyles?: string;
  alt?: string;
}

function LazyImage({
  fallBackIcon = null,
  imageUrl = null,
  imgStyles,
  alt = "",
}: LazyImageProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  return (
    <>
      {imgSrc ? (
        <img
          src={imgSrc}
          className={imgStyles}
          alt={alt}
          onError={() => setImgSrc(null)}
        />
      ) : (
        fallBackIcon
      )}
    </>
  );
}

export default LazyImage;
