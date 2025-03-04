import { View, Text } from 'react-native'
import React from 'react'
import useTaskStorage from '../controllers/taskController';



export const binarySearch = (arr, target) => {
    let lo = 0;
    let hi = arr.length - 1;
    let results = [];

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2); // Checks the middle array and rounds down if theres decimals
        let midTitle = arr[mid].title.toLowerCase();
        target = target.toLowerCase();

        if (midTitle.includes(target)) { // Has to have the includes() to indicate if the query has that letter, if used ==, the search needs to be the exact to find the task
            results.push(arr[mid]); // Add matching task
            return results;
        } else if (midTitle < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return []; // No match found
};

export const searchTasks = (tasks, query) => {
    if (!query) return tasks; // Return all tasks if search query is empty

    const lowerCaseQuery = query.toLowerCase();

    return tasks.filter(task => task.title.toLowerCase().includes(lowerCaseQuery));
};





export default binarySearch