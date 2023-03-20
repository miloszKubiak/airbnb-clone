import { createPortal } from "react-dom";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen
    flex items-center justify-center bg-zinc-600"
    >
      <div>{children}</div>
    </div>,
    document.getElementById("modal")!
  );
};
