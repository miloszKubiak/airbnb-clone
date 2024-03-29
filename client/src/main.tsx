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
  FilteredAccommodations,
  ProtectedRoute,
  FavoritesPage,
} from "./pages";
import { UserContextProvider } from "./context/UserContext";
import { Profile } from "./pages/Profile";
import { App } from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";
import { ReviewsContextProvider } from "./context/ReviewsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

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
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "/account",
        element: <Profile />,
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
        path: "/accommodations",
        element: <FilteredAccommodations />,
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
      {
        path: "/account/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <UserContextProvider>
      <SearchContextProvider>
        <FavoritesContextProvider>
          <ReviewsContextProvider>
            <RouterProvider router={router} />
          </ReviewsContextProvider>
        </FavoritesContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
