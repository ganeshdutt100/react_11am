// type  :  deposit 

// payload: 10000

// component(user) --> Action -->Dispatch --> Reducer ---> veiws (UI) 

const { act } = require("react")
const {createStore} = require("redux")

const initialState = {
    accountHolder :  "Rohit",
    balance:2000

}

function bankReducer(state = initialState ,  action ){
switch(action.type){
case "DEPOSIT":
    return{
        ...state,
        balance:state.balance + action.payload
    };

    case "WITHDRAW":
        if(state.balance < action.payload){
            console.log("balance kam hai ")
            return state;
        }
    return{
        ...state,
        balance:state.balance - action.payload
    };
    default:
        return state;
}
}

const store  = createStore(bankReducer)

store.subscribe(()=>{
    console.log("Store Updated : ",  store.getState())
})


console.log("Initial State :" , store.getState())

console.log(" Action -   500 Deposit")
store.dispatch({
    type:'DEPOSIT',
    payload:500
    
})


console.log(" Action -   1000 WITHDRAW")
store.dispatch({
    type:'WITHDRAW',
    payload:1000
    
})
