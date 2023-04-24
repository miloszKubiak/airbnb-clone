import { TAccommodation } from "./Accommodation";
import { TUser, UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Modal, ModalConfirm } from "./Modal";

export type TReview = {
  _id: string;
  accommodation: Pick<TAccommodation, "_id" | "title">;
  comment: string;
  rating: number;
  user: Pick<TUser, "_id" | "name">;
  createdAt: string;
};

type ReviewProps = {
  userName: string;
  comment: string;
  rating: number;
  createdAt: string;
  userId: string;
};

export const Review = ({
  userName,
  comment,
  rating,
  createdAt,
  userId,
}: ReviewProps) => {
  const { user } = useContext(UserContext);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const deleteReview = async () => {
    console.log("delete review success");
  };

  return (
    <>
      <Modal isOpen={modalDeleteOpen}>
        <ModalConfirm
          onClose={() => setModalDeleteOpen(false)}
          onSubmit={deleteReview}
          type={"delete"}
          context={"review"}
        />
      </Modal>
      <div className="px-3 py-2 relative bg-rose-200">
        {user?._id === userId && (
          <div className="bg-emerald-200 p-1 absolute flex gap-4 top-0 right-0">
            <button onClick={() => console.log("edit")}>edit</button>
            <button onClick={() => setModalDeleteOpen(true)}>x</button>
          </div>
        )}
        <div>
          <p>{userName}</p>
          <p>{createdAt}</p>
          <p>{comment}</p>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
};
