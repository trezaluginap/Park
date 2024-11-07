// src/screens/EventForm.js
import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import axios from '../api/apiClient';

const EventForm = ({route, navigation}) => {
  const {eventId} = route.params || {};
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    const newEvent = {name, description};
    if (eventId) {
      await axios.put(`/Name/${eventId}`, newEvent);
    } else {
      await axios.post('/Name', newEvent);
    }
    navigation.goBack();
  };

  const fetchEvent = async () => {
    if (eventId) {
      const response = await axios.get(`/Name/${eventId}`);
      setName(response.data.name);
      setDescription(response.data.description);
    }
  };

  useEffect(() => {
    fetchEvent();
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  input: {borderBottomWidth: 1, marginBottom: 10},
});

export default EventForm;
