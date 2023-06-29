import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Your name is required."),
  email: yup
    .string()
    .email("Email should have correct format.")
    .required("Your email is required."),
  password: yup.string().min(4).max(20).required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Passwords don't match!"),
});
