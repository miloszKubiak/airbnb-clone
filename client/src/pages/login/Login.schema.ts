import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email field is required."),
  password: yup.string().min(4).max(20).required("Password is required."),
});
