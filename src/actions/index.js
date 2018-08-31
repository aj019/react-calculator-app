export const doOperation = (value) => {
    return{
        type : 'NUMBER_CLICK',
        payload : value
    }
}

export const getDogs = () => {
    return{
        type : 'API_CALL_REQUEST'
    }
}
