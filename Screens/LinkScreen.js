import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Link for the zoom "
          onPress={this._handleOpenWithLinking}
          style={styles.button1}
        />
        <Button
          title="link for the google meet"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button2}
        />
        <Button
          title="Link for the whatsapp "
          onPress={this._handleOpenWithWeb}
          style={styles.button3}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://www.youtube.com/watch?v=bTSJ0YDoF7o');
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=wGXI0KpkR50');
  };
  _handleOpenWithWeb = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=y3EdIiJeTXk');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button1: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
  },
  button2: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop:100,
    borderRadius:40,
    borderWidth: 4,
  },
  button3: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
  },
});
