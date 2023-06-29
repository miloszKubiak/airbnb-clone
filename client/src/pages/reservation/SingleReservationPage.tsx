import { AccountNavbar, AddressLink, ReservationDates } from "../../components";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "../../components/modal";
import { ModalConfirm } from "../../components/modal";
import { toast, Toaster } from "react-hot-toast";
import { TReservation } from "../../types/reservation";

export const SingleReservationPage = () => {
  const { id: reservationId } = useParams();
  const [reservation, setReservation] = useState<TReservation | null>(null);
  const [paid, setPaid] = useState(false);
  const [modalCancelOpen, setModalCancelOpen] = useState(false);
  const [modalPayOpen, setModalPayOpen] = useState(false);

  const handleCancelReservation = async () => {
    try {
      await axios.patch(`/reservations/${reservationId}`, {
        status: "canceled",
      });
      setModalCancelOpen(false);
      toast.success("reservation canceled successful");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handlePayForReservation = async () => {
    try {
      await axios.patch(`/reservations/${reservationId}`, {
        status: "paid",
      });
      setPaid(true);
      setModalPayOpen(false);
      toast.success("reservation pay successful");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const getReservation = async () => {
    const response = await axios.get(`/reservations/${reservationId}`);
    setReservation(response.data);
  };

  if (!reservationId) return <Navigate to={"/account/my-reservations"} />;

  useEffect(() => {
    getReservation();
  }, [reservationId, modalCancelOpen, modalPayOpen, paid]);

  if (!reservation)
    return (
      <div>
        <h2>"nothing to display"</h2>
      </div>
    );

  return (
    <div>
      <AccountNavbar />
      <Modal isOpen={modalCancelOpen}>
        <ModalConfirm
          onClose={() => setModalCancelOpen(false)}
          onSubmit={handleCancelReservation}
          type="cancel"
          context={"reservation"}
        />
      </Modal>
      <Modal isOpen={modalPayOpen}>
        <ModalConfirm
          onClose={() => setModalPayOpen(false)}
          onSubmit={handlePayForReservation}
          type="pay for"
          context={"reservation"}
        />
      </Modal>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="mt-10 py-6 flex gap-4 justify-between">
          <div className="flex flex-col gap-2 justify-start">
            <div>
              <h1 className="text-md sm:text-3xl font-bold">
                {reservation.accommodation?.title}
              </h1>
              <AddressLink address={reservation.accommodation?.address} />
            </div>
            <ReservationDates
              numberOfNights={reservation.numberOfNights}
              numberOfGuests={reservation.numberOfGuests}
              checkIn={reservation.checkIn}
              checkOut={reservation.checkOut}
            />
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <h1 className="flex flex-col  text-sm sm:text-xl">
              Total price:{" "}
              <span className="font-bold text-center">
                {reservation.price} €
              </span>
            </h1>
            {reservation.status === "waiting" && (
              <div className="w-full flex flex-col gap-4 items-center">
                <button
                  className="w-full px-3 py-2 bg-rose-500 text-white font-bold rounded-md text-[10px] sm:text-sm"
                  onClick={() => setModalCancelOpen(true)}
                  disabled={modalCancelOpen}
                >
                  Cancel
                </button>
                <button
                  className="w-full px-3 py-2 bg-emerald-500 text-white font-bold rounded-md text-[10px] sm:text-sm"
                  onClick={() => setModalPayOpen(true)}
                  disabled={modalPayOpen}
                >
                  Pay
                </button>
              </div>
            )}
            {/*<Status status={reservation.status} />*/}
            <h2
              className={`status status-${reservation.status} text-[10px] w-full sm:text-sm text-center`}
            >
              Status: {reservation.status.toUpperCase()}
            </h2>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="cursor-pointer h-full"
            src={reservation.accommodation?.photos![0]}
            alt="photo of the place"
          />
          <div className="grid gap-2">
            <img
              className="cursor-pointer"
              src={reservation.accommodation?.photos![0]}
              alt="photo of the place"
            />
            <img
              className="cursor-pointer"
              src={reservation.accommodation?.photos![0]}
              alt="photo of the place"
            />
          </div>
        </div>
      </div>
      <Link to="/account/my-reservations" className="link-primary mt-4">
        back
      </Link>
    </div>
  );
};
