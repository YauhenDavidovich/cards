import React from 'react';
import {useFormik} from 'formik';
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

type NewPasswordProps = {}

const NewPassword: React.FC<NewPasswordProps> = () => {
    console.log('render New Password');

    const formik = useFormik({
        initialValues: {
            password: '',
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
                    </Box><Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"password"}
                            color={"primary"}
                            placeholder={"repeat password"}
                            {...formik.getFieldProps("password")}

                        />
                    </Box>
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
                        onClick={() => <Redirect to={'/login'}/>}>
                    Login
                </Button>

            </Grid>
        </Grid>
    </Container>
};

export default NewPassword;
