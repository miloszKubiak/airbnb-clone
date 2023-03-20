type ModalContentProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export const ModalContent = ({ onClose, onSubmit }: ModalContentProps) => {
  return (
    <div>
      <p>Are you sure you want to delete the reservation?</p>
      <button onClick={onClose}>No</button>
      <button onClick={onSubmit}>yes</button>
    </div>
  );
};
