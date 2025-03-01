import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import colors from '../constants/colors';

const tasks = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txtTitle}>{props.title}</Text>
      <Text style={styles.txtDesc}>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        borderRadius: 10,
        padding: 15,
        marginBottom: 8,
    },
    txtTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      paddingBottom: 8,
    },
    txtDesc:{
      fontSize: 16,
      color: colors.lightGray,
    }
})

export default tasks