import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';


import Task from '../../components/tasks';
import useTaskStorage from '../../components/taskStorage';
import colors from '../../constants/colors';

const Home = () => {
    const { taskItems, loadTasks, resetTasks } = useTaskStorage();
    const [tasks, setTasks] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchTasks = async () => {
            await loadTasks();
            setTasks([...taskItems]);
        };

        if (isFocused) {
            fetchTasks();
        }
    }, [isFocused, taskItems]);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Tasks List</Text>

            

                <View style={styles.itemsWrapper}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={tasks}
                        renderItem={({ item }) => (
                            <Task title={item.title} description={item.desc} />
                        )}
                        ListEmptyComponent={<Text style={styles.emptyText}>No tasks added yet.</Text>}
                    />
                </View>
            </View>
            <Button title="Reset Tasks" onPress={resetTasks} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: 55,
        paddingHorizontal: 30,
    },
    wrapper: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    itemsWrapper: {
        paddingBottom: 20,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
    },
});

export default Home;
