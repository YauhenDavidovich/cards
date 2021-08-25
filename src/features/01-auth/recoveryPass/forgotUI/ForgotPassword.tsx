import React from 'react';
import {useFormik} from 'formik';
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

type ForgotProps = {}

const ForgotPassword: React.FC<ForgotProps> = () => {
    console.log('render Forgot');

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });

    const redirectToLogin = () => {
        debugger;
        console.log("What is the problem?")
        return <Redirect from={'/forgotPassword'} to={'/login'}/>
    }

    return <Container maxWidth="lg" style={{background: "linear-gradient(45deg, white, blue)", height: "50vh"}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="span" display="block" style={{marginTop: "20px", marginBottom: "10px"}}>
                        <FormLabel htmlFor="email" filled={true} focused={true}
                                   style={{fontSize: "40px", color: "white"}}>Forgot Password</FormLabel>
                    </Box>
                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"email"}
                            color={"primary"}
                            placeholder={"Email"}
                            {...formik.getFieldProps("email")}

                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit"
                            style={{marginTop: "20px", width: "100%"}}>Send</Button>
                </form>

                    <Button variant={"outlined"} color={"primary"}
                            style={{border: "1px solid blue", background: "linear-gradient(45deg, orange, pink)", marginTop: "30px", width: "100%"}}
                            onClick={redirectToLogin}>Login
                    </Button>

            </Grid>
        </Grid>
    </Container>
};


export default ForgotPassword;

