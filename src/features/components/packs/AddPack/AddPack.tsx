import {Button} from "../../../../main/ui/commonStyle";
import {useFormik} from "formik";
import s from './AddPack.module.css';

//types
type FormikValuesType = {
    newPackName: string
}
type FormikErrorType = {
    newPackName?: string | null
}

//Formik validation
const validate = (values: FormikValuesType) => {
    const errors: FormikErrorType = {};
    if (!values.newPackName) {
        errors.newPackName = 'Required';
    } else if (values.newPackName.length < 3 && values.newPackName.length > 15) {
        errors.newPackName = 'Pack name must be from 3 to 15 characters';
    }
    return errors;
};

export const AddPack = () => {
    const formik = useFormik({
        initialValues: {
            newPackName: ""
        },
        validate,
        onSubmit: values => {
            alert(values.newPackName)
            formik.errors.newPackName = "";
            values.newPackName = "";
            // dispatch(addPack)
            // formik.resetForm()
        },
    });

    return (
        // <div className={s.formContainer}>
        <form onSubmit={formik.handleSubmit} className={s.formStyle}>
            <input
                className={s.inputStyle}
                placeholder={"pack name..."}
                id="newPackName"
                type="text"
                {...formik.getFieldProps('newPackName')}
            />
                {formik.errors.newPackName ? <div className={s.errorStyle}>{formik.errors.newPackName}</div> : null}
            <Button type="submit" className={s.addBtnStyle}>Add Pack</Button>
        </form>
        // </div>
    )
}
