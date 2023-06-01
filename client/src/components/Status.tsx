type StatusProps = {
  status: string;
};

export const Status = ({ status }: StatusProps) => {
  return (
    <div
      className={`status status-${status} flex items-center justify-center min-w-full sm:w-1/2`}
    >
      <div className="flex gap-1 text-[7px] sm:text-xs">
        <p className="hidden sm:block">Status: </p>
        <p className="text-[12px]">{status.toUpperCase()}</p>
      </div>
    </div>
  );
};
