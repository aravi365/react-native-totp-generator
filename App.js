import React from 'react';
import { View, Text, TouchableHighlight, AsyncStorage, StatusBar, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Navigator from './app/containers/Navigator'
import NavigatorService from './app/containers/NavigatorService'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
// import reducer from './reducers'
// import sagas from './sagas';
import { createLogger } from 'redux-logger'
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ predicate: (getstate, actions) => __DEV__ });

import immutableTransform from 'redux-persist-transform-immutable'

import { fromJS } from 'immutable'
const config = {

  storage: AsyncStorage,
  transforms: [immutableTransform()]
}
configureStore = (initialState) => {
  const enhancer = compose(applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,

  ),
    autoRehydrate()
  );
  return createStore(reducer, initialState, enhancer);

}

//const store = configureStore({});
//const persistor = persistStore(store, config)
// console.disableYellowBox=true;
//sagaMiddleware.run(sagas);
//const action = type => store.dispatch({ type })
export default class App extends React.Component {
  render() {
    return (

      //<Provider store={store}>

        <View style={{ flex: 1 }}>

          <Navigator ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
            navigator = navigatorRef

          }} />


        </View>

      //</Provider>

    );
  }
}
