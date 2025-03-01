import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import colors from '../../constants/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Profile</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: 55,
        paddingHorizontal: 30,
    },
    wrapper:{
      flex: 1,
    },
    header:{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    }
})

export default Profile