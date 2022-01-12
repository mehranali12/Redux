
 import React from 'react';
 import { AppRegistry, Text, TextInput } from 'react-native';
 import App from './App';
 import { name as appName } from './app.json';
 import { Provider } from 'react-redux';
 import store from './src/Store';

 const AppRedux =  () => {
     return (
         <Provider {...{ store }}>
          
                 <App />
            
         </Provider>
 )
 };
 
 Text.defaultProps = Text.defaultProps || {};
 Text.defaultProps.allowFontScaling = false;
 TextInput.defaultProps = TextInput.defaultProps || {};
 TextInput.defaultProps.allowFontScaling = false;
 
 AppRegistry.registerComponent(appName, () => AppRedux);
 
