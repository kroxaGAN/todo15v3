
export type RequestStatusType= 'idle' | 'loading' | 'succeeded' | 'failed'
const initialState={
    status: 'idle' as RequestStatusType
}
type InitialStateType = typeof initialState

export const appReducer=(state:InitialStateType=initialState,action:AppActionType):InitialStateType=>{
    switch (action.type){
        case "APP/SET-STATUS":{
            return {...state, status:action.status}
        }
        default:return state
    }
}

export type AppActionType=ReturnType<typeof setAppStatusAC>

export const setAppStatusAC=(status:RequestStatusType)=>{
    return {
        type:"APP/SET-STATUS",status
    }as const
}
