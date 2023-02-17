import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";

export type RequestStatusType= 'idle' | 'loading' | 'succeeded' | 'failed'
const initialState={
    status: 'idle' as RequestStatusType,
    errorSnackbarStatus:null as null | string
}
type InitialStateType = typeof initialState

export const appReducer=(state:InitialStateType=initialState,action:AppActionType):InitialStateType=>{
    switch (action.type){
        case "APP/SET-STATUS":{
            return {...state, status:action.status}
        }
        case "APP/SET-ERRORSNACKBAR":{
            return {...state, errorSnackbarStatus: action.errorSnackbarStatus}
        }
        default:return state
    }
}

export type AppActionType=ReturnType<typeof setAppStatusAC> | ReturnType<typeof setErrorSnackBarAC>

export const setAppStatusAC=(status:RequestStatusType)=>{
    return {
        type:"APP/SET-STATUS",status
    }as const
}
export const setErrorSnackBarAC=(errorSnackbarStatus:null|string)=>{
    return {
        type:"APP/SET-ERRORSNACKBAR",errorSnackbarStatus
    }as const
}
