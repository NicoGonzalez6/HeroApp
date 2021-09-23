import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiOutlineUser,
    AiOutlineMail,
} from "react-icons/ai";
import { useGlobalContext } from "../Context";
import { SET_EMAIL } from "../Reducer/actions";

const FormLogin = () => {
    const { dispatch, error } = useGlobalContext();
    return (
        <Wrapper>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(values) => {
                    let errors = {};

                    if (!values.email) {
                        errors.email = "Please enter an email";
                    } else if (
                        !/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(
                            values.email
                        )
                    ) {
                        errors.email = "please enter a valid email adress";
                    }
                    if (!values.password) {
                        errors.password = "Please enter a password";
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    dispatch({ type: SET_EMAIL, payload: values });
                    resetForm();
                }}
            >
                {({ errors }) => {
                    return (
                        <Form className="formMain animate__animated animate__fadeIn">
                            <div className="titleForm ">
                                <h1>Create an Account</h1>
                                <div className="icons">
                                    <AiFillFacebook className="icon"></AiFillFacebook>
                                    <AiFillTwitterCircle className="icon"></AiFillTwitterCircle>
                                    <AiFillInstagram className="icon"></AiFillInstagram>
                                </div>
                            </div>
                            <div className="inputs-container">
                                <AiOutlineUser></AiOutlineUser>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                ></Field>
                            </div>
                            <ErrorMessage
                                name="email"
                                component={() => {
                                    return (
                                        <div className="error">
                                            {errors.email}
                                        </div>
                                    );
                                }}
                            ></ErrorMessage>
                            <div className="inputs-container">
                                <AiOutlineMail></AiOutlineMail>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                ></Field>
                            </div>
                            <ErrorMessage
                                name="password"
                                component={() => {
                                    return (
                                        <div className="error">
                                            {errors.password}
                                        </div>
                                    );
                                }}
                            ></ErrorMessage>
                            <button
                                type="submit"
                                className="btn"
                                disabled={error}
                            >
                                Register
                            </button>
                            {error && (
                                <p className="errorText">
                                    email not registered, please check your data
                                    again
                                </p>
                            )}
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .formMain {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .titleForm {
        margin-top: 17px;
        color: var(--clr-primary);
    }

    .titleForm h1 {
        text-align: center;
    }
    .icons {
        width: 100%;
        font-size: 35px;
        display: flex;
        margin-top: 20px;
        justify-content: space-evenly;
    }

    .icon {
        cursor: pointer;
    }

    .inputs-container {
        margin-top: 25px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .inputs-container svg {
        font-size: 30px;
    }

    .inputs-container input {
        border-bottom: 1px solid var(--clr-black);
    }

    .error {
        color: var(--clr-primary);
        font-size: 15px;
    }

    .icon:hover {
        color: var(--clr-primary-darker);
    }
    .errorText {
        text-align: center;
        color: var(--clr-primary-darker);
    }
`;

export default FormLogin;
