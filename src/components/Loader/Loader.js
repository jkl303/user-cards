import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      width="200"
      radius="9"
      color="var(--btn-active)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "fixed",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      visible={true}
    />
  );
};
