import React, {Component} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sign2 from "./Sign2";
import Client from "./Client";


class Sign extends Component {
  static navigationOptions = {
    title: "로그인"
  }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
              <Text>테스트 앱 안내문구.</Text>
              <Button title="회원가입" onPress={()=>navigate("Sign2", {name: "Sign2"})}></Button>
              <Button title="  로그인  " onPress={()=>navigate("Client", {name: "Client"})}></Button>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const MainNavigator = createStackNavigator({
  Sign: {screen: Sign},
  Sign2: {screen: Sign2},
  Client: {screen: Client}
});

const App = createAppContainer(MainNavigator);
export default App;