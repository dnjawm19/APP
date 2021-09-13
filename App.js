import React from 'react';
import { AppRegistry, Text } from 'react-native';

const HelloWorldApp = () => <Text>Hello world!</Text>;
export default HelloWorldApp;

// Skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorld', () => HelloWorldApp);

// The React native code can also be imported from another component with the following code:
