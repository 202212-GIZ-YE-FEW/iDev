import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string()
        .email("invalidEmailFormat")
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "invalidEmailFormat")
        .required("required"),
    password: Yup.string().required("required"),
});

export default schema;
//password= X3&c9Q@zL1#p
