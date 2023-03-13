import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Homepage,
  Login,
  Register,
  SingleReservation,
  Accommodations,
  AccommodationForm,
} from "./pages";
import { Layout } from "./components";
import { UserContextProvider } from "./context/UserContext";
import { Profile } from "./pages/Profile";
import { SingleAccommodation } from "./pages/Accommodation/SingleAccommodation";
import { FormTest } from "./pages/Accommodation/AccommodationForm/FormTest";
import { Reservations } from "./pages/Reservations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <Profile />,
      },
      {
        path: "/account/bookings",
        element: <SingleReservation />,
      },
      {
        path: "/account/my-accommodations",
        element: <Accommodations />,
      },
      {
        path: "/account/accommodations/new",
        element: <FormTest />,
      },
      {
        path: "/account/accommodations/edit/:id",
        element: <FormTest />,
      },
      {
        path: "/accommodations/:id",
        element: <SingleAccommodation />,
      },
      {
        path: "/account/reservations/:id",
        element: <SingleReservation />,
      },
      {
        path: "/account/reservations",
        element: <Reservations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
