import { Puff } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="h-[400px] sm:h-[640px] flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#6366f1"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
