import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

export const TeamCard = ({ name, image, id }) => {
    const { dltFromTeam } = useGlobalContext();

    return (
        <Wrapper>
            <h3>{name}</h3>
            <Link to={`/single/${id}`}>
                <img src={image.url} alt={name}></img>
            </Link>
            <button
                className="buttons-cards"
                onClick={() => {
                    dltFromTeam(id);
                }}
            >
                Delete from the team
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 220px;
    height: 120px;
    margin: 7em auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        display: block;
        width: 180px;
        height: 250px;
        margin: 0 auto;
        box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.521);
    }

    .buttons-cards {
        width: 80%;
        margin: 0 auto;
        display: block;
        height: auto;
        background: #d53042;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        font-family: "Roboto Slab", serif;
        cursor: pointer;
        letter-spacing: 1.5px;
        transition: ease-in-out;
    }

    @media (min-width: 800px) {
        width: 200px;
        height: 350px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;

        h1 {
            margin: 0 auto;
        }

        .buttons-cards {
            width: 90%;
            margin: 0 auto;
            display: block;
            height: auto;
            padding: 4px;
            background: #d53042;
            border: none;
            outline: none;
            border-radius: 5px;
            color: #fff;
            font-size: 15px;
            font-family: "Roboto Slab", serif;
            cursor: pointer;
            letter-spacing: 1px;
        }

        img {
            display: block;
            width: 180px;
            height: 250px;
            margin: 0 auto;
        }
    }
`;
