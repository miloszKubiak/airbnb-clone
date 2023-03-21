type ModalContentProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export const ModalContent = ({ onClose, onSubmit }: ModalContentProps) => {
  return (
    <div
      className="px-4 py-3 flex flex-col items-center justify-center
    w-5/6 h-1/2 bg-zinc-100 rounded-lg border border-zinc-300"
    >
      <p>Are you sure you want to delete the reservation?</p>
      <div className="mt-2 flex items-center justify-center gap-4 w-5/6">
        <button className="bg-rose-200 flex-grow primary" onClick={onClose}>
          No
        </button>
        <button className="bg-rose-200 flex-grow primary" onClick={onSubmit}>
          Yes
        </button>
      </div>
    </div>
  );
};
