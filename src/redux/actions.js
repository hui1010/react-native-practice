export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_AGE = 'SET_USER_AGE'
export const INCREASE_AGE = 'INCREASE_AGE'
export const GET_CITIES = 'GET_CITIES'


export const setName = n => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: n
    })
}
export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })
}
export const increaseAge = () => dispatch => {
    dispatch({
        type: INCREASE_AGE,
    })
}

const API_URL = 'https://mocki.io/v1/95474acf-4a74-44ae-af36-9e563695503f'

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await result.json()
            if(json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                })
            } else {
                console.log('Unable to fetch!')
            }
        }
    } catch (error) {
        console.log(error)
    }
}