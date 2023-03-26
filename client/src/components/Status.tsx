type StatusProps = {
  status: string;
};

export const Status = ({ status }: StatusProps) => {
  return (
    <div className={`status status-${status} flex items-center justify-center`}>
      <h2>
        Status: <span>{status}</span>
      </h2>
    </div>
  );
};
