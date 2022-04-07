export default (state, action) => {
 switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
            transctions: state.transctions.filter(transction => transction.id !== action.payload)
    }
        default: 
           return state;
    }
}