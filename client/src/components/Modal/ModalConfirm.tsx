type ModalCancelProps = {
  onClose: () => void;
  onSubmit: () => void;
  type: string;
  context: string;
};

export const ModalConfirm = ({
  onClose,
  onSubmit,
  type,
  context,
}: ModalCancelProps) => {
  return (
    <div className={type === "pay for" ? "modal-pay" : "modal-cancel"}>
      <p>
        Are you sure you want to {type} {context}?
      </p>
      <div className="mt-2 flex items-center justify-center gap-4 w-5/6">
        <button
          className={type === "pay for" ? "button-pay" : "button-cancel"}
          onClick={onClose}
        >
          No
        </button>
        <button
          className={type === "pay for" ? "button-pay" : "button-cancel"}
          onClick={onSubmit}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
