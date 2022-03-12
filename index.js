const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

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

const initialStateCake = {
    numOfCakes: 10
}

const initialStatePastry ={
    numOfPastry: 20
}

const reducerCake = (state = initialStateCake, action)=>{
    switch(action.type){
        case BUY_CAKE:{
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        }
        default: return state;
    }
}


const reducerPastry = (state = initialStatePastry, action)=>{
    switch(action.type){
        case BUY_PASTRY:{
            return {
                ...state,
                numOfPastry: state.numOfPastry -1
            }
        }
        default: return state;
    }
}

const rootReducer = combineReducer({
    Cake: reducerCake,
    Pastry: reducerPastry
})


const store = createStore(rootReducer)
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(()=> console.log('dispatched State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyPastry())
store.dispatch(buyPastry())

unsubscribe()