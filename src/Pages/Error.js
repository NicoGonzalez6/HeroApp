import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Error = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Wrapper>
                <div className="errorPage">
                    <h1>Error 404</h1>
                    <h2>Oppps!! Page not found!</h2>
                    <Link to="/">Back Home</Link>
                </div>
            </Wrapper>
        </section>
    );
};

export default Error;

const Wrapper = styled.section`
    width: 90%;
    margin: 4rem auto;

    .errorPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: 0 auto;
        height: 300px;
        border-radius: 10px;
        gap: 30px;
        background: #f7f6f6;
        box-shadow: var(--light-shadow);
    }

    a {
        margin: 15px auto;
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        background: #d53042;
        color: #fff;
        cursor: pointer;
    }

    a:hover {
        background: #be2a3b;
    }
`;
