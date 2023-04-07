import * as Yup from "yup";
const schema = Yup.object().shape({
    firstName: Yup.string()
        .matches(
            /^[\u0621-\u064A\u0660-\u0669 a-zA-Z\s]+$/,
            "First name must contain only letters and spaces"
        )
        .required("Required"),
    lastName: Yup.string()
        .matches(
            /^[\u0621-\u064A\u0660-\u0669 a-zA-Z\s]+$/,
            "Last name must contain only letters and spaces"
        )
        .required("Required"),
    email: Yup.string()
        .email("Invalid email format")
        .matches(
            /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
            "Invalid email format, must include '@' and '.'"
        )
        .required("Required"),

    confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Emails must match")
        .required("Required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            "Password must contain at least one letter and one number"
        )
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    dateOfBirth: Yup.date()
        .nullable()
        .max(new Date(), "Date of birth cannot be in the future")
        .required("Required"),
});

export default schema;
