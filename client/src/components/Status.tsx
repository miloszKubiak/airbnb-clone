type StatusProps = {
  status: string;
};

export const Status = ({ status }: StatusProps) => {
  return (
    <div
      className={`status status-${status} flex items-center justify-center w-full sm:w-1/2`}
    >
      {/*<p>{status.toUpperCase()}</p>*/}
      <p className="text-[7px] sm:text-xs">
        Status: <span className="">{status.toUpperCase()}</span>
      </p>
    </div>
  );
};
