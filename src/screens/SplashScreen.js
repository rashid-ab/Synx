/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Image,Dimensions } from 'react-native';

function App({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    React.useEffect(() => {
      const timer = setTimeout(() => navigation.replace('Login'), 3000);
    }, []);
  return (
    <Image source={require('../assets/splash.jpeg')} style={{width:windowWidth,height:windowHeight}} />
  );
}

export default App;