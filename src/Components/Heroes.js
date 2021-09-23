import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { Card } from "./Card";

const Heroes = () => {
    const { search, errorMsg, isLoading } = useGlobalContext();

    if (isLoading) {
        return <div className="lds-dual-ring"></div>;
    }
    return (
        <Wrapper>
            {errorMsg.active ? (
                <h1 className={errorMsg.type}>{errorMsg.msg}</h1>
            ) : null}
            {search.map((hero, index) => {
                return <Card key={index} {...hero}></Card>;
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 90%;
    margin: 2rem auto;
    height: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-width: 500px) {
        width: 90%;
        margin: 2rem auto;
        height: auto;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media (min-width: 600px) {
        width: 90%;
        margin: 2rem auto;
        height: auto;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    @media (min-width: 800px) {
        width: 70%;
        margin: 2rem auto;
        height: auto;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

export default Heroes;
