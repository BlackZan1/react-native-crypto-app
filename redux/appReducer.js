import Axios from "axios";

const API_KEY = '8ef93020-1be3-416d-965f-5073668e2a77';
const SET_DATA = 'app/SET_DATA', TOGGLE_FETCHING = 'app/TOGGLE_FETCHING', TOGGLE_THEME = 'app/TOGGLE_THEME';

export const themeVariants = {
    'black': {
        bg: '#202124',
        color: '#fff'
    },
    'white': {
        bg: '#fff',
        color: '#000'
    }
}

let initialState = {
    data: [],
    theme: 'white',
    isFetching: true
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetch
            }
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.themeName
            }
        default:
            return state;
    }
}

// Actions
export const setDataAction = (data) => ({type: SET_DATA, data});
export const toggleFetchingAction = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});
export const toggleThemeAction = (themeName) => ({type: TOGGLE_THEME, themeName});

// Thunk
export const getDataAction = (convert) => (dispatch) => {
    dispatch(toggleFetchingAction(true));

    try {
        Axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}&limit=18&convert_id=${convert}`)
        .then(res => {
            dispatch(setDataAction(res.data.data));
            dispatch(toggleFetchingAction(false));
        })
        .catch(err => {
            dispatch(toggleFetchingAction(false));

            throw err;
        })
    }
    catch(err) {
        dispatch(toggleFetchingAction(false));

        throw err;
    }
}

export default appReducer;