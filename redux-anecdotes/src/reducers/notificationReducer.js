import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    message: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification(state, action) {
            const message = action.payload
            return {...state, message: message}
        },
        removeNotification(state) {
            return {...state, message: ''}
        }
    }
})

export const { addNotification, removeNotification } = notificationSlice.actions

let startTimer;

export const handleNotification = (message, timer) => {  
    return async dispatch => {
        clearTimeout(startTimer)
        startTimer = setTimeout(() => {
                dispatch(removeNotification())
            }, timer)
    
        dispatch(addNotification(message))
    }
}

export default notificationSlice.reducer
