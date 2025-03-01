import { StyleSheet, TextInput, View, Text, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import useTaskStorage from '../../components/taskStorage'; // Import taskStorage logic

import colors from '../../constants/colors';

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
            <Text style={styles.header}>Creating Task</Text>
            
            
            <Text style={styles.txt}>Enter Title:</Text>
            <View style={styles.wrapper}>
                <TextInput
                    maxLength={35}
                    placeholder={'Title...'}
                    placeholderTextColor= {colors.fadePurple}
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />
            </View>

            <Text style={styles.txt}>Enter Description:</Text>
            <View style={styles.wrapper}>
                <TextInput
                    maxLength={150}
                    multiline
                    numberOfLines={4}
                    placeholder={'Description...'}
                    placeholderTextColor= {colors.fadePurple}
                    style={styles.input}
                    value={desc}
                    onChangeText={setDesc}
                />
                
                <TouchableOpacity onPress={addTasks}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addTxt}>+ Add</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: colors.primary,
    },
    wrapper: {
        alignItems: 'center',
    },
    input: {
        padding: 13,
        width: 330,
        backgroundColor: colors.primary,
        borderColor: colors.purple,
        color: 'white',
        
        borderWidth: 1.5,
        borderRadius: 15,
    },
    addWrapper: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: colors.green,
    },
    addTxt: {
        fontSize: 20,
        fontWeight: 700,
    },
    txt:{
        paddingBottom: 8,
        paddingTop: 15,
        color: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 14,
        color: 'white',
    },
});

export default AddItem;
