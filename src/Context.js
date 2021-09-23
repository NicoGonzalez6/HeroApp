/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "./Reducer/reducer";
import {
    SET_ERROR,
    SET_CLEAN,
    SET_SUCCESS,
    SET_EXIT,
    SET_SEARCH,
    SET_GOOD,
    SET_TEAM,
    SET_BAD,
    SET_DELETE_TEAM,
    DEL_GOOD,
    DEL_BAD,
} from "./Reducer/actions";
import userEvent from "@testing-library/user-event";

const AppContext = React.createContext();

const checkLogin = () => {
    if (window.localStorage.getItem("token")) {
        const initialState = {
            email: "",
            password: "",
            error: false,
            search: [],
            team: [],
            good: [],
            bad: [],
            isAuth: true,
        };
        return initialState;
    } else {
        const initialState = {
            email: "",
            password: "",
            error: false,
            search: [],
            team: [],
            good: [],
            bad: [],
        };
        return initialState;
    }
};
const AppProvider = ({ children }) => {
    const [powerStats, setPowerStats] = useState({});
    const [heightWeight, setHeightWeight] = useState([]);
    const [state, dispatch] = useReducer(reducer, checkLogin());
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        type: "",
        msg: "",
        active: false,
    });

    const sendData = async () => {
        try {
            if (state.email && state.password) {
                await axios
                    .post("http://challenge-react.alkemy.org/", {
                        email: state.email,
                        password: state.password,
                    })
                    .then((res) =>
                        localStorage.setItem("token", res.data.token)
                    );
                dispatch({ type: SET_SUCCESS });
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: SET_ERROR });
        }
    };

    const fetchData = async (name) => {
        setIsLoading(true);
        try {
            axios(
                `http://superheroapi.com/api/6350582161626215/search/${name}`
            ).then((response) => {
                if (response.data.response === "error") {
                    setIsLoading(false);
                    dispatch({ type: SET_ERROR });
                    return;
                } else {
                    setIsLoading(false);
                    dispatch({
                        type: SET_SEARCH,
                        payload: response.data.results,
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    // Logout
    const exitUser = () => {
        dispatch({ type: SET_EXIT });
        window.localStorage.removeItem("token");
    };
    //post login info
    useEffect(() => {
        sendData();
    }, [state.email]);

    // clear Error state
    useEffect(() => {
        const time = setTimeout(() => {
            dispatch({ type: SET_CLEAN });
        }, 3000);

        return () => {
            clearTimeout(time);
        };
    }, [state.error]);

    // clear Error MSG
    useEffect(() => {
        const time = setTimeout(() => {
            setErrorMsg({ type: "", active: false, msg: "" });
        }, 3000);

        return () => {
            clearTimeout(time);
        };
    }, [errorMsg]);

    const teamSelection = (id) => {
        const newHero = state.search.filter((e) => e.id === id);

        newHero.map((e) => {
            if (e.biography.alignment === "good") {
                if (state.good.find((e) => e.id === id)) {
                    setErrorMsg({
                        type: "danger",
                        msg: "hero already in the team",
                        active: true,
                    });

                    return;
                } else {
                    setErrorMsg({
                        type: "success",
                        msg: "hero added to the team succesfully",
                        active: true,
                    });

                    goodAlignment(e);
                }
            }

            if (e.biography.alignment === "bad") {
                if (state.bad.find((e) => e.id === id)) {
                    setErrorMsg({
                        type: "danger",
                        msg: "villain already in the team",
                        active: true,
                    });

                    return;
                } else {
                    setErrorMsg({
                        type: "success",
                        msg: "villain added to the team succesfully",
                        active: true,
                    });

                    badAlignment(e);
                }
            }
        });
    };

    const goodAlignment = (newHero) => {
        if (state.good.length <= 2) {
            dispatch({ type: SET_GOOD, payload: newHero });
            dispatch({ type: SET_TEAM, payload: newHero });
        } else {
            setErrorMsg({
                type: "danger",
                msg: "already have 3 good heroes on the team",
                active: true,
            });
        }
    };

    const badAlignment = (newHero) => {
        if (state.bad.length <= 2) {
            dispatch({ type: SET_BAD, payload: newHero });
            dispatch({ type: SET_TEAM, payload: newHero });
        } else {
            setErrorMsg({
                type: "danger",
                msg: "already have 3 villains on the team",
                active: true,
            });
        }
    };

    const dltFromTeam = (id) => {
        const newHero = state.team.filter((e) => e.id !== id);
        const oldHero = state.team.filter((e) => e.id === id);

        oldHero.map((e) => {
            if (e.biography.alignment === "good") {
                const newHero = state.good.filter((e) => e.id !== id);
                dispatch({ type: DEL_GOOD, payload: newHero });
            } else {
                const newHero = state.bad.filter((e) => e.id !== id);
                dispatch({ type: DEL_BAD, payload: newHero });
            }
        });
        dispatch({ type: SET_DELETE_TEAM, payload: newHero });
    };

    const clearTeam = () => {
        dispatch({ type: SET_DELETE_TEAM });
    };

    const setStats = () => {
        let Combat = 0;
        let Durability = 0;
        let Intelligence = 0;
        let Power = 0;
        let Speed = 0;
        let Strength = 0;
        if (state.team.length >= 1) {
            state.team.map((e) => {
                if (e.powerstats.combat === "null") {
                    const data = {
                        Combat: 0,
                        durability: 0,
                        intelligence: 0,
                        power: 0,
                        speed: 0,
                        strength: 0,
                    };

                    setPowerStats({
                        combat: (Combat += data.Combat),
                        durability: (Durability += data.durability),
                        intelligence: (Intelligence += data.intelligence),
                        power: (Power += data.power),
                        speed: (Speed += data.speed),
                        strength: (Strength += data.strength),
                    });
                } else {
                    const {
                        combat,
                        intelligence,
                        durability,
                        strength,
                        speed,
                        power,
                    } = e.powerstats;

                    setPowerStats({
                        combat: (Combat += parseInt(combat)),
                        durability: (Durability += parseInt(durability)),
                        intelligence: (Intelligence += parseInt(intelligence)),
                        power: (Power += parseInt(power)),
                        speed: (Speed += parseInt(speed)),
                        strength: (Strength += parseInt(strength)),
                    });
                }
            });
        } else {
            setPowerStats({
                combat: 0,
                durability: 0,
                intelligence: 0,
                power: 0,
                speed: 0,
                strength: 0,
            });
        }
    };

    const avgTeamWeight = () => {
        let wieghtValue = 0;
        let heightValue = 0;

        state.team.map((e) => {
            const Height = parseInt(
                e.appearance.height[1].split(" ").slice(0, 1).toString()
            );

            const Weight = parseInt(
                e.appearance.weight[1].split(" ").slice(0, 1).toString()
            );

            setHeightWeight({
                weight: Math.round((wieghtValue += Weight) / state.team.length),
                height: Math.round((heightValue += Height) / state.team.length),
            });
        });
    };

    useEffect(() => {
        setStats();
        avgTeamWeight();
        if (state.team.length == 0) {
            setHeightWeight({
                weight: 0,
                height: 0,
            });
        }
    }, [state.team]);
    return (
        <AppContext.Provider
            value={{
                setIsLoading,
                heightWeight,
                powerStats,
                clearTeam,
                dltFromTeam,
                dispatch,
                ...state,
                exitUser,
                fetchData,
                teamSelection,
                errorMsg,
                isLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
