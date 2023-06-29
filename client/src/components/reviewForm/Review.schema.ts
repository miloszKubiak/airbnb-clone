import * as yup from "yup";

export const reviewSchema = yup.object().shape({
  comment: yup.string().min(2).max(255).required("You must add a comment."),
  rating: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(5)
    .required("You must add rating."),
});
