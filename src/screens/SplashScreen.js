import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';

const SplashScreen = () => {
  const {height, width} = Dimensions.get('window');

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'home'}]});
    }, 2000);
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#daf5ff'}}>
      <StatusBar backgroundColor={'#daf5ff'} />
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode="stretch"
        source={require('../../Assets4/splash.png')}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
