// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import courseReducer from './reducers/courseReducer';
// import userReducer from './reducers/userReducer';

// // rootReducer oluşturuyoruz, bu birden fazla reducer'ı birleştirecek.
// const rootReducer = combineReducers({
//   course: courseReducer,
//   user: userReducer
// });

// // Redux DevTools Extension entegrasyonunu etkinleştirmek için.
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // Store'u oluştururken rootReducer ve middleware'leri ekliyoruz.
// const store = createStore(
//   rootReducer,
//   enhancer(applyMiddleware(thunk))
// );

// export default store;
