import { combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import globalReducer from '../GlobalStore/reducers'
// import MainReducer from '../App/containers/MainPage/reducers'
// import PushReducer from '../App/containers/PushOpen/reducers'
const config = {
    key: 'root',
    storage:AsyncStorage, 
    transforms: [immutableTransform()]
    }

const appReducer= combineReducers(Object.assign({
    globalReducer,
    // MainReducer,
    // PushReducer
 
}))


const rootReducer = (state, action) => {
	
  return appReducer(state, action)
}

export default rootReducer;
