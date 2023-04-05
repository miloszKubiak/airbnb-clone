import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Homepage,
  Login,
  Register,
  SingleReservationPage,
  UserAccommodationsPage,
  UserReservationsPage,
  AccommodationForm,
  SingleAccommodationPage,
} from "./pages";
import { UserContextProvider } from "./context/UserContext";
import { Profile } from "./pages/Profile";
import { App } from "./App";
import { AccommodationsContextProvider } from "./context/AccommodationsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <SingleReservationPage />,
      },
      {
        path: "/account/my-accommodations",
        element: <UserAccommodationsPage />,
      },
      {
        path: "/account/accommodations/new",
        element: <AccommodationForm />,
      },
      {
        path: "/account/accommodations/edit/:id",
        element: <AccommodationForm />,
      },
      {
        path: "/accommodations/:id",
        element: <SingleAccommodationPage />,
      },
      {
        path: "/account/reservations/:id",
        element: <SingleReservationPage />,
      },
      {
        path: "/account/my-reservations",
        element: <UserReservationsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <AccommodationsContextProvider>
        <RouterProvider router={router} />
      </AccommodationsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
