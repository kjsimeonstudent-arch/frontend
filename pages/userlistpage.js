import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function UserListPage({ navigation }){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', { user });
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://127.0.0.1:8000/registration/api/registration");
            setUsers(response.data || []);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to fetch users. Please try again.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const deleteUser = async (userId, userName) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/registration/api/registration/${userId}`);

            const message = response.data?.message || `User ${userName} deleted successfully`;
            Alert.alert('Success', message);
            
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
            
        } catch (error) {
            console.error('Delete error:', error);
            
            let errorMessage = 'Failed to delete user. Please try again.';
            if (error.response?.status === 404) {
                errorMessage = 'User not found. It may have already been deleted.';
            } else if (error.response?.status === 500) {
                errorMessage = 'Server error occurred. Please try again later.';
            } else if (error.code === 'NETWORK_ERROR' || !error.response) {
                errorMessage = 'Network error. Please check your connection.';
            }
            
            Alert.alert('Error', errorMessage);
        }
    };

    const confirmDelete = (user) => {
        const userName = `${user.first_name} ${user.last_name}`;
        Alert.alert(
            'Confirm Delete',
            `Are you sure you want to delete ${userName}?\n\nThis action cannot be undone.`,
            [
                { text: 'Cancel', style: 'cancel' },
                { 
                    text: 'Delete', 
                    style: 'destructive', 
                    onPress: () => deleteUser(user.id, userName) 
                }
            ]
        );
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchUsers();
    };

    return (
        <View>
            <Text>Registered Users</Text>
            <Button
                title="Add User"
                color="#007AFF"
                onPress={() => navigation.navigate('Register')}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>first_name: {item.first_name}</Text>
                            <Text>last_name: {item.last_name}</Text>
                            <Text>email: {item.email}</Text>
                            <Text>gender: {item.gender}</Text>
                            <View>
                                <Button title="Edit"
                                    color="#4afd79ff"
                                    onPress={() => handleEdit(item)}
                                />
                                <Button title="Delete"
                                    color="#ff4d4d"
                                    onPress={() => handleDelete(item.id)}
                                />
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}
