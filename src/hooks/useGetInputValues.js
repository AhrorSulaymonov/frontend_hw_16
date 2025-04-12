import { useState } from "react";


function useGetInputValues(initialValues = {}) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetValues = () => setValues(initialValues);

    return {
        values,
        setValues,
        handleChange,
        resetValues
    }
}

export default useGetInputValues;