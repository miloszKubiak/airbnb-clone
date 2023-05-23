import * as yup from "yup";

export const accommodationSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  address: yup.string().max(50).required("Address is required."),
  description: yup.string().required("Description is required."),
  photos: yup.string().required("Photo is required."),
  perks: yup.array().of(yup.string()),
  category: yup.string(),
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
