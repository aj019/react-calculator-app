export default function(state=initialState,action){
    switch(action.type){
        case 'NUMBER_CLICK':
            let value = action.payload;
            if(value == '='){
                return{
                    ...state,
                    output: eval(state.output)
                }
            } else if(value == 'clear'){
                return{
                    ...state,
                    output: ''
                }
            } else{
                return{
                    ...state,
                    output : state.output + value
                }
            }              
    }
    return state;
}

const initialState = {
    output: '',
  };