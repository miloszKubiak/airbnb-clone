import * as yup from "yup";

export const accommodationSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  address: yup.string().required("Address is required."),
  description: yup.string().required("Description is required."),
  photos: yup.string().required("Photos field is required."),
  perks: yup.string(),
  extraInfo: yup.string(),
  checkIn: yup.string().required("Check in field is required."),
  checkOut: yup.string().required("Check out field is required."),
  maxGuests: yup.number().required("Max guests field is required."),
  price: yup.number().required("Price field is required."),
});
