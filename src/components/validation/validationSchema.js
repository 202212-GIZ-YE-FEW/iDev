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
        .required("Password is required")
        .min(12, "Password must be at least have at least 12 characters long")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
            "Password Have at least (one uppercase letter ,one lowercase letter, one number, one special character from the set @$!%*#?&)"
        )
        .test(
            "no-repeat-characters",
            "Password must not contain repeating characters",
            function (value) {
                const regex = /(.)\1{2,}/;
                return !regex.test(value);
            }
        )
        .test(
            "no-common-words",
            "Password must not contain common words",
            function (value) {
                const commonWords = [
                    "password",
                    "123456",
                    "qwerty",
                    "letmein",
                    "admin",
                ];
                const regex = new RegExp(`(${commonWords.join("|")})`, "i");
                return !regex.test(value);
            }
        ),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    dateOfBirth: Yup.date()
        .nullable()
        .max(new Date(), "Date of birth cannot be in the future")
        .required("Required"),
});

export default schema;
