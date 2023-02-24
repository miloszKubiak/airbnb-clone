import * as yup from "yup";

export const accommodationSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  address: yup.string().required("Address is required."),
  description: yup.string().required("Description is required."),
  // photos: yup.array().of(yup.string()),
  photos: yup.string().required("Add link to the photo."),
  perks: yup.string(),
  extraInfo: yup.string(),
  checkIn: yup.string().required("Check in field is required."),
  checkOut: yup.string().required("Check out field is required."),
  maxGuests: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .required("Max guests field is required."),
  price: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .required("Price field is required."),
});