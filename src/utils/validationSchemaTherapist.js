import * as Yup from "yup";

const schema = Yup.object({
    userName: Yup.string()
        .required("required")
        .matches(/^[a-zA-Z0-9]{6,}$/, "userName"),
    city: Yup.string().required("required"),
    licenseNamber: Yup.number()
        .required("required")
        .test(
            "len",
            "licenseNumber",
            (val) => val && val.toString().length === 9
        ),
});
export default schema;
