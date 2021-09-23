import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

export const Card = ({ name, image, powerstats, biography, id }) => {
    const { teamSelection } = useGlobalContext();
    const [rotate, setRotate] = useState(false);

    const { alignment } = biography;

    return (
        <Wrapper className="animate__animated animate__backInLeft">
            <div
                className={rotate ? "theCard rotate" : "theCard"}
                onClick={() => {
                    setRotate(!rotate);
                }}
            >
                <div className="theFront">
                    <img src={image.url} alt={name} className="imgCard"></img>
                </div>
                <div className="theBack">
                    <div>
                        <h2>{name.toUpperCase()}</h2>
                        <p className="stats">
                            <span>Combat:</span>
                            {powerstats.combat}
                        </p>
                        <p className="stats">
                            <span>Durability:</span>
                            {powerstats.durability}
                        </p>
                        <p className="stats">
                            <span>intelligence:</span>
                            {powerstats.intelligence}
                        </p>
                        <p className="stats">
                            <span>power:</span>
                            {powerstats.power}
                        </p>
                        <p className="stats">
                            <span>speed:</span>
                            {powerstats.speed}
                        </p>
                        <p className="stats">
                            <span>strength:</span>
                            {powerstats.strength}
                        </p>
                        <h3>{alignment.toUpperCase()}</h3>
                    </div>
                </div>
            </div>

            <div className="buttons-cards">
                <Link to={`/single/${id}`}>more Info</Link>
                <button
                    onClick={() => {
                        teamSelection(id);
                    }}
                    className="btn-cards"
                >
                    ADD TO THE TEAM
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 250px;
    height: 320px;
    margin: 30px 0;
    background: transparent;
    padding-top: 60px;

    h2,
    h3 {
        color: black;
    }

    span {
        color: #fff;
    }

    .stats {
        color: #fff;
    }

    .theCard {
        position: absolute;
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }

    .success {
        border: 1px solid green;
    }

    .rotate {
        transform: rotateY(180deg);
    }

    .buttons-cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        align-items: center;
        bottom: -30%;
    }

    .theFront {
        position: absolute;
        width: 250px;
        height: 320px;
        backface-visibility: hidden;
        color: var(--clr-black);
    }

    .theBack {
        position: absolute;
        width: 250px;
        height: 320px;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        cursor: pointer;
        background: #d94757;
        text-align: center;
    }

    .imgCard {
        display: block;
        margin: 0 auto;
        width: 250px;
        height: 320px;
        object-fit: cover;
        box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.521);
    }

    @media (min-width: 800px) {
        position: relative;
        width: 250px;
        height: 320px;
        margin: 30px 0;
        background: transparent;
        padding-top: 50px;
    }
`;
