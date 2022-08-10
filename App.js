/* eslint-disable semi */
import React,{useState,useEffect,useRef} from 'react';
import { store } from './src/redux/index'
import { Provider } from 'react-redux'
import Navigation from './src/navigations/index';
import FlashMessage from "react-native-flash-message";
 
 function App() {
 useEffect(() => {
}, []);
  return (
    // <Text>ADAa</Text>
     <Provider store={store}>
       <Navigation />
       <FlashMessage position="top" />
     </Provider>

  );
};
export default App;
