import * as Yup from "yup";
const schema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/^[\u0621-\u064A\u0660-\u0669 a-zA-Z\s]+$/, "letterSpace")
        .required("required")
        .min(3, "min"),
    email: Yup.string().email("invalidFormat").required("required"),
    details: Yup.string().required("required").min(10, "min"),
});

export default schema;
