const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
  loading: false,
  users: [],
  error: ""
};

const FETCH_USER_REQEUST = "FETCH_USER_REQEUST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQEUST,
  };
};

const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQEUST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        Users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading:false,
        Users:[],
        error: action.payload,
      };
  }
};

const fetchUser = () =>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                const users = res.data.map(user => user.name)
                dispatch(fetchUserSuccess(users))
            })
            .catch(error =>{
                dispatch(fetchUserFailure(error.message))
            })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{ console.log(store.getState())})
store.dispatch(fetchUser())
