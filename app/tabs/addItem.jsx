import { StyleSheet, TextInput, View, Text, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import useTaskStorage from '../../components/taskStorage'; // Import taskStorage logic

const AddItem = () => {
    console.log('Adding Task...');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const { addTask } = useTaskStorage(); // Get addTask function

    const addTasks = () => {
        Keyboard.dismiss();
        if (!title.trim() || !desc.trim()) return; // Prevent empty tasks
        console.log('New Task:', title, desc);

        const newTask = { title, desc };
        addTask(newTask); // Add task and save in AsyncStorage
        console.log("Created: \n" + newTask.title + "\n" + newTask.desc)

        setTitle('');
        setDesc('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Adding a To Do</Text>
            <View>
                <Text>Enter Title:</Text>
                <TextInput
                    maxLength={20}
                    placeholder={'Type here...'}
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />

                <Text>Enter Description:</Text>
                <TextInput
                    maxLength={50}
                    multiline
                    numberOfLines={4}
                    placeholder={'Type here...'}
                    style={styles.input}
                    value={desc}
                    onChangeText={setDesc}
                />
            </View>

            <TouchableOpacity onPress={addTasks}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addTxt}>+ Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
    },
    input: {
        padding: 10,
        width: 300,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    addWrapper: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: 'green',
    },
    addTxt: {
        fontSize: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default AddItem;
