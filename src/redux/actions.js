export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_AGE = 'SET_USER_AGE'
export const INCREASE_AGE = 'INCREASE_AGE'

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