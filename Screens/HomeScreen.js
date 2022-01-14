import React, { Component } from 'react';
import { Text, View,Alert,TouchableOpacity,StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen</Text>
                <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Links")
                    }>
                        <Text style={styles.routeText}>LinksScreen</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Problems")
                    }>
                        <Text style={styles.routeText}>ProblemScreen</Text>
                        
                    </TouchableOpacity>
          
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 25,
        paddingLeft: 25
    },
   
});
