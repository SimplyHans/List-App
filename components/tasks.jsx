import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const tasks = (props) => {
  return (
    <View style={styles.container}>
        <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 15,
        marginBottom: 8,
    }
})

export default tasks