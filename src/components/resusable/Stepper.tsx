import React from "react";

interface StepperProps {
  className?: string;
}
export const Stepper = ({ className = "" }: StepperProps) => {
  return <div className={`${className} h-1 rounded`} />;
};

export default Stepper;
