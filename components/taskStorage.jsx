import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useTaskStorage = () => {
    const [taskItems, setTaskItems] = useState([]);

    useEffect(() => {
        loadTasks(); // Load tasks when the component mounts
    }, []);

    // Load tasks from AsyncStorage
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) {
                setTaskItems(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Failed to load tasks:', error);
        }
    };

    // Add a new task and update AsyncStorage
    const addTask = async (newTask) => {
        try {
            const updatedTasks = [...taskItems, newTask];
            setTaskItems(updatedTasks);
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist tasks
        } catch (error) {
            console.error('Failed to save task:', error);
        }
    };

    const resetTasks = async () => {
      try {
          await AsyncStorage.removeItem('tasks');
          setTaskItems([]); // Reset the list
      } catch (error) {
          console.error('Failed to reset tasks:', error);
      }
  };

    return { taskItems, addTask, loadTasks, resetTasks  };
};

export default useTaskStorage;
