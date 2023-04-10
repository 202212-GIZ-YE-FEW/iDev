import * as Yup from "yup";

const schema = Yup.object({
    userName: Yup.string()
        .required("required")
        .matches(
            /^[a-zA-Z0-9]{6,}$/,
            "Username should contain at least 6 characters and should only include letters and numbers."
        ),
    city: Yup.string().required("required"),
    licenseNamber: Yup.number()
        .required("required")
        .test(
            "len",
            "License number should be exactly 9 digits",
            (val) => val && val.toString().length === 9
        ),
});
export default schema;
