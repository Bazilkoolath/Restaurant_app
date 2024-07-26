import{RESTAURENT_LIST_FAIL,RESTAURENT_LIST_SUCCESS} from '../constyands/resaurentCounstands'

export const restaurentListReducer=(state={restaurent:[]},action)=>{
 if(action.type==RESTAURENT_LIST_SUCCESS){
    return {restaurent:action.payload}

 }
 if(action.type==RESTAURENT_LIST_FAIL){
    return {restaurent:action.payload}

 }
 else{
    return state
 }
}