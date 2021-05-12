var redux = require('redux')

const InitialState = {
    LoginStatus : false,
    UserNameOnline : "",
    UserIdOnline : "",
    Totalprice : 0,
    ItemInCart : [],
    Users :  [],
    Products : [],
    Sale : [] 
}
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'DropAllCart':
            return {...state, ItemInCart : []}
        case 'DropItemIncart' :
            return {...state, ItemInCart : state.ItemInCart.filter((item) => item.id !== action.item)}
        case 'AddSaleCode':
            return {...state, Sale : action.Sale}
        case 'AlterCart':
            return {...state, ItemInCart : [...state.ItemInCart , action.item]}
        case 'AddItemToCart':
            return {...state , ItemInCart : action.Item}
        case 'IsLogin':
            return {...state ,  LoginStatus : !state.LoginStatus }
        case 'GetUserData':
            return {...state , Users : action.Users }
        case 'ChangeUserNameOnline':
            return {...state , UserNameOnline :action.UserNameOnline}
        case 'ChangeUserIdOnline':
            return {...state , UserIdOnline : action.UserIdOnline}
        case 'GetProductData':
            return {...state , Products : action.Products}
        case 'AddNewUser':
            return {...state , Users : state.Users.push(action.Item)}
        case 'SetTotalPrice' :
            return {...state , Totalprice : action.total}
        default:
            return state
    }
}

const store = redux.createStore(reducer);

export default store;