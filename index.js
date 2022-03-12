const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE ='BUY_CAKE'
const BUY_PASTRY = 'BUY_PASTRY'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
} 
function buyPastry(){
    return{
        type: BUY_PASTRY,
        info: 'First redux action'
    }
} 

const initialState = {
    numOfCakes: 10,
    numOfPastry:20
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE:{
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        }
        case BUY_PASTRY:{
            return {
                ...state,
                numOfPastry: state.numOfPastry -1
            }
        }
        default: return state;
    }
}

const store = createStore(reducer)
console.log('initial state',store.getState());
store.subscribe(()=> console.log('dispatched State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyPastry())
store.dispatch(buyPastry())