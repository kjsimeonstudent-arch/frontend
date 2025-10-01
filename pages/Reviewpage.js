import axios from 'axios';
import { View, Text, Button, Alert } from 'react-native';

export default function Reviewpage({ route, navigation }) {
    const { formdata } = route.params;

    const handleSubmit = async () => {
        try{
            const response = await axios.post("https://127.0.0.1:8000/registration/api/register", formdata);
            Alert.alert("Success", "User registered succesfully",);
            navigation.getBack();
        }catch{(error)
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong."));
        }
    };

    return (
        <View>
            <Text>Review Information</Text>

            <Text>First Name: {formdata.first_name}</Text>
            <Text>Last Name: {formdata.last_name}</Text>
            <Text>Email: {formdata.email}</Text>
            <Text>Gender: {formdata.gender}</Text>

            <Button title="Go back to edit" onPress={() => navigation.goBack()}/>
            <Button title="Submit" onPress={(handleSubmit)}/>
        </View>
    );
};