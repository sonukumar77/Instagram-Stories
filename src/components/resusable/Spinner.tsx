import { useEffect } from "react";

interface Props {
  text?: string;
}

const Spinner = ({ text }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col z-50">
      {text ? <p className="text-center p-4"> {text}</p> : null}
      <div className="w-8 h-8 border-t-2 border-b-2 border-red-500 rounded-full animate-spin mx-auto"></div>
    </div>
  );
};
export default Spinner;
