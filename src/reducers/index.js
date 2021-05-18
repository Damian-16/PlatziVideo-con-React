//Reducers

const reducer = (state,action) =>{
    // return state;
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList:[...state.myList,action.payload]// el action.payload es el objeto a guardar en la lista
             }// state.myList es los elementos de la lista que me estoy trayendo
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList:state.myList.filter(items => items.id !== action.payload)
            }     
        default:
            return state;
    }
}
export default reducer;