import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';


export default class Sign2 extends Component {    
    static navigationOptions = {
        title: "회원가입"
    }

    state = {
        name : "",
        id : "",
        password : "",
    };

    changeName = (text) => {
        this.setState({ name : text });
    };

    changeId = (text) => {
        this.setState({id : text});
    }
    
    changePassword = (text) => {
        this.setState({ password : text });
    };
     
    render(){
        return (
            <View style={styles.container}>              
              <Text style={styles.title}>회원가입 화면</Text>              

              <TextInput
              placeholder="이름"
              style={styles.textinput}
              onChangeText={this.changeName}
              value={this.state.name}
              />
              <TextInput
              placeholder="아이디"
              style={styles.textinput}
              onChangeText={this.changeId}
              value={this.state.id}
              />
              <TextInput
              secureTextEntry='true'
              placeholder="비밀번호"
              style={styles.textinput}
              onChangeText={this.changePassword}
              value={this.state.password}
              />

              <Button title="회원가입" onPress={() => alert(`${this.state.name}, ${this.state.id}, ${this.state.password}`)}/>
            </View>
          );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
      margin: 30,
      fontSize: 30,
      fontWeight: 'bold',
  },

  textinput:{
    width: 250,
    marginBottom: 10,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  }
});

