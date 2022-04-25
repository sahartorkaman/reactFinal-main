import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import CustomTextInput from "../shared/CustomTextInput";

const CustomFormField = ({ name, ...otherProps }) => {
    const {
        handleChange,
        setFieldTouched,
        errors,
        touched,
    } = useFormikContext();

    return (
        <>
            <CustomTextInput
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default CustomFormField;
