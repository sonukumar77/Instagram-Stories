export const calculateWidth = (length: number) => {
  switch (length) {
    case 1:
      return "w-full";
    case 2:
      return "w-1/2";
    default:
      return "w-1/3";
  }
};
