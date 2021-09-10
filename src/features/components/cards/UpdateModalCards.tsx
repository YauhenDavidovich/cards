import React from "react";
import {FormControl, FormGroup, TextareaAutosize} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {upDateCardThunk} from "../../../main/bll/cardsReducer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Modal} from "./ModalCards";

type UpdateCardsModalType = {
    show: boolean
    setShow: (show: boolean) => void
    cardsPack_id: string
    cardsId: string
}

type FormikErrorType = {
    question?: string
    answer?: string
}


export const UpdateModalCards = (props: UpdateCardsModalType ) => {

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            question: '',
            answer: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.question) {
                errors.question = 'name is required';
            } else if (!/[A-Z]/i.test(values.question)) {
                errors.question = 'Invalid name';
            }
            if (!values.answer) {
                errors.answer = 'name is required';
            } else if (!/[A-Z]/i.test(values.answer)) {
                errors.answer = 'Invalid name';
            }

            return errors;
        },
        onSubmit: values => {

            props.setShow(false)
            dispatch(upDateCardThunk(cardsId,cardsPack_id,values.answer, values.question))
            formik.resetForm();
        },
    })

    return (
            <Modal
                   height={200}
                   width={180}
                   backgroundOnClick={() => props.setShow(false)}
                   enableBackground={true}
                   show={props.show}>

                <form onSubmit={formik.handleSubmit}>

                    <FormControl>
                        <FormGroup>
                            <Grid container direction='column' spacing={1} alignItems='center'>
                                <Grid item>
                                    <TextareaAutosize minRows={3} placeholder="enter question"
                                                      {...formik.getFieldProps("question")}/>
                                    {formik.touched.question && formik.errors.question ?
                                        <div style={{color: "blue"}}>{formik.errors.question}</div> : null}
                                </Grid>
                                <Grid item>
                                    <TextareaAutosize minRows={3} placeholder="enter answer"
                                                      {...formik.getFieldProps("answer")}/>
                                    {formik.touched.answer && formik.errors.answer ?
                                        <div style={{color: "blue"}}>{formik.errors.answer}</div> : null}
                                </Grid>
                                <Grid item>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}>Update</Button>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                </form>

            </Modal>
       )

};