import React, { Component } from 'react';
import { Text, View,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class ProblemScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
        
                <TextInput
                style={styles.inputFont}
                onChangeText={title => this.setState({ title })}
                placeholder={"Problem"}
                placeholderTextColor="black"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={10}
                placeholderTextColor="black"
              />
              <TouchableOpacity
          style={styles.submitButton}
          onPress={async()=>{
            var transactionMessage = await this.handleTransaction();
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  
  inputFont: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    marginTop: 20,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
});

