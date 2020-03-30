import React from "react";
import {Field, reduxForm} from "redux-form";
import Element from "../common/fomsControll/FormsControl";
import {requiredField} from "../../utils/validator/validator";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import css from '../common/fomsControll/FormsControll.module.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const Input = Element('input')

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"email"}
                       component={Input}
                       validate={requiredField}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"}
                       validate={requiredField} component={Input}/>
            </div>
            <div>
                <label>
                    <Field type={"checkbox"} name={"rememberMe"}
                           validate={requiredField} component={Input}/> remember me
                </label>
            </div>
            {props.error &&
            <div className={css.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default connect(mapStateToProps, {login})(Login);