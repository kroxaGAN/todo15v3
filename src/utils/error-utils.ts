import {AppActionType, setAppStatusAC, setErrorSnackBarAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError=(dispatch:Dispatch<AppActionType>,error: { message:string })=>{
    dispatch(setAppStatusAC("failed"))
    dispatch(setErrorSnackBarAC(error.message))
}
export const handleServerAppError=<D>(data:ResponseType<D>,dispatch:Dispatch<AppActionType>)=>{
    if(data.messages.length){
        dispatch(setErrorSnackBarAC(data.messages[0]))
    }else{
        dispatch(setErrorSnackBarAC("Something wrong...."))
    }
    dispatch(setAppStatusAC("failed"))
}

