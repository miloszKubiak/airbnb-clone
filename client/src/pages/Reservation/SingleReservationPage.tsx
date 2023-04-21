import { AccountNavbar, AddressLink, ReservationDates } from "../../components";
import { Link, Navigate, useParams } from "react-router-dom";
import { TReservation } from "../../components/Reservation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, ReviewFormModal } from "../../components/Modal";
import { ModalContent } from "../../components/Modal";

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
      alert("Reservation canceled successful");
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  const handlePayForReservation = async () => {
    try {
      await axios.patch(`/reservations/${reservationId}`, {
        status: "paid",
      });
      setPaid(true);
      setModalPayOpen(false);
      alert("Reservation pay successful");
    } catch (error) {
      alert("Something went wrong.");
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
        <ModalContent
          onClose={() => setModalCancelOpen(false)}
          onSubmit={handleCancelReservation}
          type="cancel"
        />
      </Modal>
      <Modal isOpen={modalPayOpen}>
        <ModalContent
          onClose={() => setModalPayOpen(false)}
          onSubmit={handlePayForReservation}
          type="pay for"
        />
      </Modal>
      <div>
        <div className="mt-10 py-6 flex gap-4 justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold">
              {reservation.accommodation?.title}
            </h1>
            <AddressLink address={reservation.accommodation?.address} />
            <ReservationDates
              numberOfNights={reservation.numberOfNights}
              numberOfGuests={reservation.numberOfGuests}
              checkIn={reservation.checkIn}
              checkOut={reservation.checkOut}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-xl">
              Total price: {reservation.price} €
            </h1>
            {reservation.status === "waiting" && (
              <div className="flex flex-col gap-4 items-center">
                <button
                  className="px-3 py-2 bg-rose-500 text-white font-bold rounded-md text-[6px] sm:text-sm"
                  onClick={() => setModalCancelOpen(true)}
                  disabled={modalCancelOpen}
                >
                  Cancel reservation
                </button>
                <button
                  className="w-full px-3 py-2 bg-emerald-500 text-white font-bold rounded-md text-[6px] sm:text-sm"
                  onClick={() => setModalPayOpen(true)}
                  disabled={modalPayOpen}
                >
                  Pay
                </button>
              </div>
            )}
            {/*<Status status={reservation.status} />*/}
            <h2
              className={`status status-${reservation.status} text-[6px] sm:text-sm`}
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
