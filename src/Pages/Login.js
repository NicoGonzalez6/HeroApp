import React from "react";
import styled from "styled-components";
import FormLogin from "../Components/FormLogin";
import Logo from "../Assets/image.png";
import "animate.css";
const Login = () => {
    return (
        <Wrapper>
            <main className="loginMain">
                <section className="loginContainer ">
                    <div className="form">
                        <FormLogin></FormLogin>
                    </div>
                    <div className="Title-img">
                        <div className="title  animate__animated animate__fadeIn">
                            <h1>Welcome</h1>
                            <h3>
                                Group up your favorite heroes and villains and
                                make the perfect team!
                            </h3>
                            <img
                                src={Logo}
                                alt="logo"
                                className="imgLogo  animate__animated animate__fadeIn"
                            ></img>
                        </div>
                    </div>
                </section>
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    .loginContainer {
        transform: translateY(40px);
        width: 95%;
        height: 450px;
        margin: 0 auto;
        display: flex;
        box-shadow: var(--light-shadow);
        flex-direction: column;
    }
    .Title-img {
        width: 100%;
        background: #d0192d;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .title {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 20px;
        text-align: justify;
    }

    .imgLogo {
        padding-top: 10px;
        width: 250px;
        display: block;
    }

    .form {
        width: 100%;
        background: #fff;
    }

    @media (min-width: 800px) {
        .loginContainer {
            transform: translateY(120px);
            width: 95%;
            height: 450px;
            margin: 0 auto;
            display: flex;
            box-shadow: var(--light-shadow);
            flex-direction: row;
        }

        .Title-img {
            border-radius: 10px 0 0 10px;
        }

        .form {
            border-radius: 0 10px 10px 0;
        }
        .form {
            order: 2;
        }

        .Title-img {
            order: 1;
        }
    }

    @media (min-width: 1400px) {
        .loginContainer {
            transform: translateY(120px);
            width: 65%;
            height: 450px;
            margin: 0 auto;
            display: flex;
            border-radius: 20px;
            box-shadow: var(--light-shadow);
            flex-direction: row;
        }

        .form {
            order: 2;
        }

        .Title-img {
            order: 1;
        }
    }
`;

export default Login;
