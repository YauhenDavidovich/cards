import React from 'react';
import {FormikProps} from "formik";
import {RegistrationInitValueType} from "./SignInContainer";
import style from './SignIn.module.css'
import {Button} from "../../../main/ui/commonStyle";




type RegistrationPropsType = {
    formik: FormikProps<RegistrationInitValueType>


}

export const SignIn: React.FC<RegistrationPropsType> = ({formik}) => {
    return (
        <div>
            <form onSubmit={formik.handleSubmit}/>
            <h2>Sign Up</h2>
            <div className={style.register}>
                <div className={style.email}>
                    <h2>Email</h2>
                    <input type='email'
                           {...formik.getFieldProps('email')}/>

                </div>
                {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div className={style.password}>
                    <h3>Password</h3>
                    <input type='password'
                        {...formik.getFieldProps('password')}/>
                </div>
                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}

                <h3>Confirm Password</h3>
                <div>
                    <input type='confirm password'
                           {...formik.getFieldProps('confirm password')}/>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>}
                <div>
                    <Button onClick={() => formik.resetForm()} style={{color:'grey'}}>Cancel</Button>
                    <Button>Register</Button>
                </div>




            </div>




        </div>


    )
}


