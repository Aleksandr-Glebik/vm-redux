import { DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function enableBtn() {
    return {
        type: ENABLE_BUTTONS
    }
}
export function disableBtn() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT})
            dispatch(enableBtn())
        }, 1000)

    }
    // return {
    //     type: ASYNC_INCREMENT
    // }
}