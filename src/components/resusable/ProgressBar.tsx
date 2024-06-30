import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  duration: number;
  onComplete: () => void;
  className?: string;
}

const ProgressBar = ({
  duration,
  onComplete,
  className = "",
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const end = start + duration;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        onComplete();
      }
    };

    updateProgress();

    return () => {
      setProgress(0);
    };
  }, [duration, onComplete]);

  return (
    <div className={`relative h-1 bg-gray-500 rounded ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-white rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
