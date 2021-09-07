import {Button} from "../../../../main/ui/commonStyle";
import {useFormik} from "formik";
import s from './AddPack.module.css';
import {useDispatch} from "react-redux";
import {addPack} from "../../../../main/bll/pacsReducer";

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
    } else if (values.newPackName.length < 3 || values.newPackName.length > 15) {
        errors.newPackName = 'Pack name must be from 3 to 15 characters';
    }
    return errors;
};

export const AddPack = () => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            newPackName: ""
        },
        validate,
        onSubmit: (values) => {

            console.log(values.newPackName)
            dispatch(addPack(values.newPackName))
            formik.resetForm()
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

            {formik.errors.newPackName && formik.touched.newPackName ? <div className={s.errorStyle}>{formik.errors.newPackName}</div> : null}
            <Button type="submit" className={s.addBtnStyle}>Add Pack</Button>
            {/*<button type='submit'>add pack</button>*/}
        </form>
        // </div>
    )
}
