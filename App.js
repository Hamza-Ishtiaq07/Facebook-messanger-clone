import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FirstPage  from "./app/components/MessangerLoggedpage";
import Chats from "./app/components/Chats";
import ChatBody from "./app/components/ChatBody";



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <FirstPage/>
          {/* <Chats style={styles.Chats}/>
        <ChatBody/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  Chats:{
    flex:1,
    marginTop: 20,
  }
});
