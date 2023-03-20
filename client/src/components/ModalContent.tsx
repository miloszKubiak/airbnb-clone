type ModalContentProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export const ModalContent = ({ onClose, onSubmit }: ModalContentProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Are you sure you want to delete the reservation?</p>
      <div className="mt-2 flex gap-4">
        <button className="primary" onClick={onClose}>
          No
        </button>
        <button className="primary" onClick={onSubmit}>
          Yes
        </button>
      </div>
    </div>
  );
};
