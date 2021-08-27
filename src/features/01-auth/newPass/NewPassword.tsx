import React from 'react';
import {useFormik} from 'formik';
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {RequestStatusType} from "../../../main/bll/forgotReducer";
import LinearProgress from "@material-ui/core/LinearProgress";

type NewPasswordProps = {}

type FormikErrorType = {
    passwordInit?: string
    passwordRepeat?: string
}

const NewPassword: React.FC<NewPasswordProps> = () => {

    const status = useSelector<AppStateType, RequestStatusType>(state => state.newPassword.status);

    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            passwordInit: '',
            passwordRepeat: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if(!values.passwordInit) {
                errors.passwordInit = 'Required';
            };
            if(!values.passwordRepeat) {
                errors.passwordRepeat = 'Required';
            } else if(values.passwordInit !== values.passwordRepeat) {
                errors.passwordRepeat = "Passwords must be the same"
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    return <Container maxWidth="lg" style={{background: "linear-gradient(45deg, white, blue)", height: "50vh"}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="span" display="block" style={{marginTop: "20px", marginBottom: "10px"}}>
                        <FormLabel htmlFor="email" filled={true} focused={true}
                                   style={{fontSize: "30px", color: "white"}}>Enter new password </FormLabel>
                    </Box>
                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"password"}
                            color={"primary"}
                            placeholder={"password"}
                            {...formik.getFieldProps("password")}

                        />
                    </Box>
                    {formik.errors.passwordInit ? <div style={{"color":"red"}}>{formik.errors.passwordInit}</div> : null}
                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"password"}
                            color={"primary"}
                            placeholder={"repeat password"}
                            {...formik.getFieldProps("password")}
                        />

                    {formik.errors.passwordInit ? <div style={{"color":"red"}}>{formik.errors.passwordInit}</div> : null}
                    </Box>
                    {status === "loading" && <LinearProgress color={"secondary"}/>}
                    <Button variant="contained" color="primary" type="submit"
                            style={{marginTop: "20px", width: "100%"}}>Set password</Button>
                </form>

                <Button variant={"outlined"} color={"primary"}
                        style={{
                            border: "1px solid blue",
                            background: "linear-gradient(45deg, orange, pink)",
                            marginTop: "30px",
                            width: "100%"
                        }}
                        onClick={() => {history.push('/login')}}>
                    Login
                </Button>

            </Grid>
        </Grid>
    </Container>
};

export default NewPassword;
