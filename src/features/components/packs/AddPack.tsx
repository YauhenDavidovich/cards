import {Button} from "../../../main/ui/commonStyle";
import {useFormik} from "formik";
import {loginTC} from "../../../main/bll/login-reducer";

type FormikErrorType = {
    packname?: string
}

export const AddPack = () => {
    const formik = useFormik({
        initialValues: {
            packname: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.packname) {
                errors.packname = 'Name Required';
            } else if (values.packname.length < 3 && values.packname.length > 50 ) {
                errors.packname = 'Must be 3 characters or more and less than 50';
            }
            return errors;

        },
        onSubmit: values => {
            // dispatch(addPack)
            formik.resetForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">packname</label>
            <input
                id="packname"
                name="packname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.packname}
            />

            <Button  type="submit">Save</Button>
            <Button>Cancel</Button>
        </form>
    )
}
