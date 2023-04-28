import * as Yup from "yup";

const schema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/^[\u0621-\u064A\u0660-\u0669 a-zA-Z\s]+$/, "letterSpace")
        .required("required"),
    hubbies: Yup.string()
        .matches(/^[\u0621-\u064A\u0660-\u0669 a-zA-Z\s]+$/, "letterSpace")
        .required("required"),
    email: Yup.string()
        .email("invalidFormat")
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "invalidFormat")
        .required("required"),
    dateOfBirth: Yup.date()
        .nullable()
        .max(new Date(), "dateOfBirthFuture")
        .required("required"),

    newPassword: Yup.string()
        .required("required")
        .min(12, "passwordLength")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
            "passwordCriteria"
        )
        .test("no-repeat-characters", "noRepeatCharacters", function (value) {
            const regex = /(.)\1{2,}/;
            return !regex.test(value);
        })
        .test("no-common-words", "noCommonWords", function (value) {
            const commonWords = [
                "password",
                "123456",
                "qwerty",
                "letmein",
                "admin",
            ];
            const regex = new RegExp(`(${commonWords.join("|")})`, "i");
            return !regex.test(value);
        }),
    currentPassword: Yup.number().required("required"),
    familySize: Yup.number().required("required"),
    phoneNumber: Yup.number()
        .matches(/^(73|77|71)\d{7}$/, "phoneNumber")
        .required("required"),
    uploadId: Yup.mixed()
        .required("required")
        .test(
            "fileFormat",
            "uploadId",
            (value) =>
                value &&
                ["image/png", "image/jpeg", "application/pdf"].includes(
                    value.type
                )
        ),
});

export default schema;
//password= X3&c9Q@zL1#p
