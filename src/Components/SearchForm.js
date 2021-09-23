import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GoSearch } from "react-icons/go";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
    const { fetchData, error } = useGlobalContext();

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: "",
                }}
                validate={(values) => {
                    let errors = {};

                    if (values.name) {
                        return;
                    } else {
                        errors.name = "Please enter a value";
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                    fetchData(values.name);
                }}
            >
                {({ errors }) => {
                    return (
                        <Form>
                            <label>Search your favorite character</label>
                            <div className="input-search">
                                <GoSearch></GoSearch>
                                <Field type="text" name="name"></Field>
                            </div>

                            <button type="submit" className="btn-search">
                                Search
                            </button>
                            <ErrorMessage
                                name="name"
                                component={() => {
                                    return (
                                        <div className="error">
                                            {errors.name}
                                        </div>
                                    );
                                }}
                            ></ErrorMessage>
                            {error ? (
                                <div className="error">
                                    <p>No heroes or villains found</p>
                                </div>
                            ) : null}
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 90%;
    min-height: 140px;
    height: auto;
    background: #fff;
    margin: 1rem auto;
    border-radius: 5px;
    box-shadow: var(--light-shadow);
    padding: 20px 0;
    transform: translatey(40px);

    .error {
        color: red;
        transform: translateY(15px);
    }

    form {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .input-search {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    svg {
        font-size: 18px;
        color: var(--clr-primary-2);
    }
    input {
        width: 90%;
        border-bottom: 1px solid var(--clr-black);
    }

    @media (min-width: 800px) {
        width: 60%;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`;

export default SearchForm;
