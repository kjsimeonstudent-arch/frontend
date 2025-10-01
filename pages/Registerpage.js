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
            <Text>User Registration</Text>
            <TextInput
                placeholder='First Name'
                value={formdata.first_name}
                onChangeText={(text) => handleChange('first_name', text)}
            />

            <TextInput
                placeholder='Last Name'
                value={formdata.last_name}
                onChangeText={(text) => handleChange('last_name', text)}
            />

            <TextInput
                placeholder='Email'
                value={formdata.email}
                onChangeText={(text) => handleChange('email', text)}
            />

            <TextInput
                placeholder='Password'
                value={formdata.password}
                onChangeText={(text) => handleChange('password', text)}
                secureTextEntry={true}
            />

            <TextInput
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1, // takes up the full screen
    justifyContent: 'center', // centers vertically
    alignItems: 'center',
    gap:20,
    },
});