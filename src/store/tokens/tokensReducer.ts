import { Action } from "./actions";

export interface TokenState{
    tokens:string 
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_TOKEN":{
            return {tokens: action.payload} //caso o tipo seja "ADD_TOKEN", ele receberá o payload (que atribui no actions.ts: token)
        }
        default: 
        return state //se não, volta ao estado inicial: vazio
    }
}