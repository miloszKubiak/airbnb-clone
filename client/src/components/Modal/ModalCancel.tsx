type ModalCancelProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export const ModalCancel = ({ onClose, onSubmit }: ModalCancelProps) => {
  return (
    <div
      className="px-4 py-3 flex flex-col items-center justify-center
    w-5/6 h-1/2 bg-rose-100 rounded-lg border-2 border-rose-500"
    >
      <p>Are you sure you want to delete reservation?</p>
      <div className="mt-2 flex items-center justify-center gap-4 w-5/6">
        <button className="flex-grow button-cancel" onClick={onClose}>
          No
        </button>
        <button className="flex-grow button-cancel" onClick={onSubmit}>
          Yes
        </button>
      </div>
    </div>
  );
};
