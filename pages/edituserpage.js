import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import axios from "axios";



export default function EditUserPage({ route, navigation }) {
    const { user } = route.params;

    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);
    const [password, setPassword] = useState(user.password);

    const handleUpdate = async () => {
        if (!first_name || !last_name || !email || !gender || !password) {
            Alert.alert("Error", "All fields are required.");
            return;
        }

        axios.put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            password: password
        })
        .then(() => {
            Alert.alert("User Updated Successfully");
            navigation.goBack();
        })
        .catch(error => {
            console.error(error);
            Alert.alert("Error", "Failed to update the user.");
        });
    };
    return (
        <View>
            <Text style={styles.title}>Edit User</Text>

            <TextInput
                placeholder="First Name"
                value={first_name}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="Last Name"
                value={last_name}
                onChangeText={setLastName}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Gender"
                value={gender}
                onChangeText={setGender}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View>
                <Button title="Update" onPress={handleUpdate} />
            </View>
        </View>
    );
}

















const styles = StyleSheet.create({
    title: { 
        fontSize: 32, 
        fontWeight: "bold", 
        marginBottom: 20 
    },
});