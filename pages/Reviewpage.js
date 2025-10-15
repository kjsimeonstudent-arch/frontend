import axios from 'axios';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function Reviewpage({ route, navigation }) {
    const { formdata } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/users", formdata);
            Alert.alert("Success", "User registered successfully");
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text>Review Information</Text>

            <Text>First Name: {formdata.first_name}</Text>
            <Text>Last Name: {formdata.last_name}</Text>
            <Text>Email: {formdata.email}</Text>
            <Text>Gender: {formdata.gender}</Text>

            <Button style={styles.button} 
            title="Go back to edit" 
            onPress={() => navigation.goBack()} />
            <Button style={styles.button} 
            title="Submit" onPress={(handleSubmit)} />
        </View>
    );
};


//Styles//
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: "center", 
        alignItems: "center",
    },
});