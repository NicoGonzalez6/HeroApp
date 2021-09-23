import {
    SET_EMAIL,
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
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case SET_ERROR:
            return { ...state, error: true };
        case SET_CLEAN:
            return { ...state, email: "", password: "", error: false };
        case SET_SUCCESS:
            return { ...state, isAuth: true };
        case SET_EXIT:
            return { ...state, isAuth: false };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        case SET_TEAM:
            return { ...state, team: [...state.team, action.payload] };
        case SET_GOOD:
            return { ...state, good: [...state.good, action.payload] };
        case DEL_GOOD:
            return { ...state, good: action.payload };
        case SET_BAD:
            return { ...state, bad: [...state.bad, action.payload] };
        case DEL_BAD:
            return { ...state, bad: action.payload };
        case SET_DELETE_TEAM:
            if (!action.payload) {
                return {
                    ...state,
                    team: [],
                    good: [],
                    bad: [],
                };
            }
            return {
                ...state,
                team: action.payload,
            };

        default:
            console.log(`no matching ${action.type} action type`);
    }
};
