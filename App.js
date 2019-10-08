import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
//redux
import {Provider} from 'react-redux';
import configureStore from './src/store'
//Routes
import Routes from './src/components/Routes'

const store = configureStore()

const App= () =>{
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#111' barStyle="white-content" />
      <View style={styles.container}>
        <Routes/>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
