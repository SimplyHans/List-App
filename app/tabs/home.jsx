import { StyleSheet, View, Text, TextInput, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

import Task from '../../components/tasks';
import taskController from '../../controllers/taskController';
import colors from '../../constants/colors';
import { searchTasks } from '../../controllers/homeController';

const Home = () => {
  const { taskItems, loadTasks, resetTasks } = taskController();
  const [tasks, setTasks] = useState([]);           // All tasks (sorted)
  const [searchQuery, setSearchQuery] = useState(''); // User input for search
  const [filteredTasks, setFilteredTasks] = useState([]); // Results to display
  const isFocused = useIsFocused();

  // Load tasks when screen is focused
  useEffect(() => {
    const fetchTasks = async () => {
      await loadTasks(); // Load tasks from AsyncStorage
      
      // Sort tasks alphabetically by title
      const sortedTasks = [...taskItems].sort((a, b) => a.title.localeCompare(b.title));
      setTasks(sortedTasks);

      // Only set filteredTasks to the full list if no search query is present
      if (!searchQuery) {
        setFilteredTasks(sortedTasks);
      }
    };

    if (isFocused) {
      fetchTasks();
    }
  }, [isFocused, taskItems]); 

  // Apply search filter whenever tasks or searchQuery change
  useEffect(() => {
    // Call the search function from home controller
    const results = searchTasks(tasks, searchQuery);
    setFilteredTasks(results);
  }, [tasks, searchQuery]);

  // Handle user search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Tasks List</Text>

        {/* Search Input */}
        <TextInput
          style={styles.searchBar}
          maxLength={35}
          placeholder="Search..."
          placeholderTextColor={colors.darkGray}
          value={searchQuery}
          onChangeText={handleSearch}
        />

        {/* Tasks List */}
        <View style={styles.itemsWrapper}>
          <FlatList
            data={filteredTasks}
            keyExtractor={(item, index) => index.toString()}
            extraData={filteredTasks} // Ensures list updates on state change
            renderItem={({ item }) => (
              <Task title={item.title} description={item.desc} />
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>No tasks found.</Text>}
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
    marginBottom: 10,
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
  searchBar: {
    padding: 15,
    backgroundColor: colors.thirdly,
    borderRadius: 25,
    marginBottom: 25,
    color: 'white',
  },
});

export default Home;
