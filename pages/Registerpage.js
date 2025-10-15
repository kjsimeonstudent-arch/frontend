import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function RegisterPage({ navigation }) {
    const [formdata, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formdata, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Registration</Text>
            <TextInput style={styles.input}
                placeholder='First Name'
                value={formdata.first_name}
                onChangeText={(text) => handleChange('first_name', text)}
            />

            <TextInput style={styles.input}
                placeholder='Last Name'
                value={formdata.last_name}
                onChangeText={(text) => handleChange('last_name', text)}
            />

            <TextInput style={styles.input}
                placeholder='Email'
                value={formdata.email}
                onChangeText={(text) => handleChange('email', text)}
            />

            <TextInput style={styles.input}
                placeholder='Password'
                value={formdata.password}
                onChangeText={(text) => handleChange('password', text)}
                secureTextEntry={true}
            />

            <TextInput style={styles.input}
                placeholder='Gender'
                value={formdata.gender}
                onChangeText={(text) => handleChange('gender', text)}
            />
            <Button
                title="Review and Submit"
                onPress={() => navigation.navigate("Review", { formdata })}
            />
        </View>
    );
}




//Styles//
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 20,
        backgroundColor: "#7ad3ffff",
    },

    title: { 
        fontSize: 32, 
        fontWeight: "bold", 
        marginBottom: 20 
    },

    input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#c1f8ffff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#e4e4e4ff",
  },
});