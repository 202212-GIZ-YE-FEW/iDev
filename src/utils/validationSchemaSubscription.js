import * as Yup from "yup";
const schema = Yup.object().shape({
    email: Yup.string()
        .email("invalidFormat")
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "invalidFormat")
        .required("required"),
});

export default schema;
