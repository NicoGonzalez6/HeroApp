/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const Singleheroe = () => {
    const { setIsLoading } = useGlobalContext();
    const { id } = useParams();
    const [singleHero, setSingleHero] = useState({});

    const fetchData = async (id) => {
        setIsLoading(true);
        axios(`http://superheroapi.com/api/6350582161626215/${id}`).then(
            (response) => {
                setSingleHero(response);
                if (singleHero) {
                    setIsLoading(false);
                }
            }
        );
    };

    useEffect(() => {
        fetchData(id);
    }, []);

    if (singleHero.data) {
        const {
            image: { url },
            name,
        } = singleHero.data;

        const { "full-name": fullname } = singleHero.data.biography;
        const {
            "eye-color": eyeColor,
            "hair-color": hairColor,
            height,
            weight,
        } = singleHero.data.appearance;
        const {
            work: { base },
        } = singleHero.data;

        return (
            <div>
                <Navbar></Navbar>
                <Wrapped>
                    <div className="singleCntainer">
                        <div className="singleImg">
                            <img src={url} alt={singleHero.name}></img>
                        </div>
                        <div className="singleInfo">
                            <ul>
                                <li>
                                    <span>Name:</span> {fullname}
                                </li>
                                <li>
                                    <span>Alias:</span> {name}
                                </li>
                                <li>
                                    <span>Eye Color : </span>
                                    {eyeColor}
                                </li>
                                <li>
                                    <span>Hair Color :</span> {hairColor}
                                </li>
                                <li>
                                    <span>Workplace: </span>
                                    {base}
                                </li>
                                <li>
                                    <span>Weight :</span> {weight[1]}
                                </li>
                                <li>
                                    <span>Height : </span>
                                    {height[1]}
                                </li>
                            </ul>
                            <Link to="/">back Home</Link>
                        </div>
                    </div>
                </Wrapped>
                ;
            </div>
        );
    }

    return <div className="lds-dual-ring"></div>;
};

const Wrapped = styled.section`
    width: 90%;
    margin: 4rem auto;

    ul {
        list-style: none;
        margin: 0;
        padding: 30px 0 0 0;
    }

    span {
        font-weight: 900;
    }

    li {
        margin: 20px 0;
    }
    a {
        margin: 15px auto;
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        background: var(--clr-primary);
        color: var(--clr-white);
        cursor: pointer;
    }

    a:hover {
        background: var(--clr-primary-darker);
    }

    .singleCntainer {
        display: flex;
        flex-direction: column;
        height: auto;
        align-items: center;
        padding: 10px;
        background: var(--clr-white-darker);
        box-shadow: var(--light-shadow);
        border-radius: 5px;
    }

    .singleImg {
        width: 90%;
        height: 350px;
    }

    img {
        display: block;
        min-width: 180px;
        width: 80%;
        height: 350px;
        margin: 0 auto;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: var(--light-shadow);
    }
    .singleInfo {
        width: 90%;
        min-height: 450px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    @media (min-width: 800px) {
        width: 70%;
        margin: 4rem auto;

        ul {
            list-style: none;
            margin: 5px 0 0 0;
            padding: 0;
        }

        li {
            margin: 20px 30px;
        }

        a {
            margin: 0 30px;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
            background: #d53042;
            color: var(--clr-white);
            cursor: pointer;
        }

        .singleCntainer {
            display: flex;
            flex-direction: row;
            height: 400px;
            justify-content: space-between;
            gap: 10px;
            padding: 20px;
            background: var(--clr-white-darker);
            box-shadow: var(--light-shadow);
            border-radius: 5px;
        }

        .singleImg {
            width: 50%;
            height: 400px;
        }

        .singleInfo {
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
        }
        img {
            display: block;
            width: 250px;
            height: 400px;
            margin: 0 auto;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    @media (min-width: 1200px) {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .singleCntainer {
            display: flex;
            flex-direction: row;
            height: 500px;
            justify-content: space-between;
        }

        a {
            margin: 0 30px;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
            background: #d53042;
            color: var(--clr-white);
        }

        li {
            margin: 30px 30px;
        }
        .singleInfo {
            width: 50%;
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
        }

        .singleImg {
            width: 50%;
            height: 450px;
        }
        img {
            display: block;
            width: 400px;
            height: 450px;
            margin: 0 auto;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;

export default Singleheroe;
