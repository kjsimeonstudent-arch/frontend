import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Homepage({ navigation }) {
    return (
        <View>
            <Text>Homepage</Text>
            <View>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
}
