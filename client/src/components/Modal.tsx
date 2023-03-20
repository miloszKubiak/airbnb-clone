import { createPortal } from "react-dom";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div>{children}</div>
    </>,
    document.getElementById("modal")!
  );
};
