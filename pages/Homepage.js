import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Homepage</Text>
            <View>
                <Button style={styles.button}
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <View>
                <Button style={styles.button}
                    title="View User"
                    onPress={() => navigation.navigate('UserList')}
                />
            </View>
        </View>
    );
}






//Styles//
const styles = StyleSheet.create({
  container: { 
    flex: 3, 
    gap: 30,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#7ad3ffff", 
    padding: 20 },

    title: { 
        fontSize: 32, 
        fontWeight: "bold", 
        marginBottom: 20 
    },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: "white", 
    fontSize: 25, 
    fontWeight: "bold"
 },
});