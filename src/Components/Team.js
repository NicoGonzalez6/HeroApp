import React from "react";
import { useGlobalContext } from "../Context";
import styled from "styled-components";
import { TeamCard } from "./TeamCard";
import Chart from "./Chart";

const Team = () => {
    const { team, clearTeam, powerStats, heightWeight } = useGlobalContext();

    const { combat, durability, intelligence, power, speed, strength } =
        powerStats;

    const chartData = [
        {
            label: "Combat",
            value: combat,
        },
        {
            label: "Intelligence",
            value: intelligence,
        },
        {
            label: "Durability",
            value: durability,
        },

        {
            label: "Power",
            value: power,
        },
        {
            label: "Speed",
            value: speed,
        },
        {
            label: "Strength",
            value: strength,
        },
    ];

    const avgData = [
        {
            label: "height",
            value: heightWeight.weight,
        },
        {
            label: "weight",
            value: heightWeight.weight,
        },
    ];

    return (
        <Wrapper>
            {team.length >= 1 ? (
                <article className="chart-infoContainer">
                    <div className="avg-PowerStats">
                        <h1>TEAM POWER STATS</h1>
                        <Chart data={chartData}></Chart>
                    </div>
                    <div className="avg-weight">
                        <h1>TEAM AVERAGE WEIGHT-HEIGHT</h1>
                        <Chart data={avgData}></Chart>
                    </div>
                </article>
            ) : null}
            <article className="teamChosen">
                {team.length >= 1 ? (
                    <h1>TEAM CHOSEN</h1>
                ) : (
                    <h1 className="Chosen-Tittle">NO TEAM CHOSEN YET</h1>
                )}

                <div className="teamCards">
                    {team.map((e, index) => (
                        <TeamCard {...e} key={index}></TeamCard>
                    ))}
                </div>

                {team.length >= 1 ? (
                    <button className="btn" onClick={clearTeam}>
                        CLEAR TEAM
                    </button>
                ) : null}
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 90%;
    height: auto;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    .Chosen-Tittle {
        transform: translateY(40px);
    }

    .avg-PowerStats {
        width: 100%;
        margin-top: 20px;
        transform: translateX(-20px);
    }

    .avg-PowerStats h1 {
        transform: translateX(30px);
    }

    .avg-weight {
        margin-top: 20px;
        width: 100%;
    }

    .teamChosen {
        width: 100%;
        text-align: center;
        order: 2;
    }

    h1 {
        margin-bottom: 45px;
    }

    .teamCards {
        width: 100%;
        display: flex;
        margin: 0 auto;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (min-width: 800px) {
        width: 80%;
        min-height: 100px;
        hegith: auto;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;

        .Chosen-Tittle {
            transform: translateY(0px);
        }

        .teamCards {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            gap: 30px;
            justify-content: center;
            flex-wrap: wrap;
        }

        h1 {
            margin-top: 45px;
            margin-bottom: 0px;
        }
        .chart-infoContainer {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .avg-PowerStats {
            width: 50%;
            height: 400px;
        }

        .avg-weight {
            width: 50%;
            height: 400px;
        }

        .chart-infoContainer {
            display: flex;
        }
    }
`;

export default Team;
