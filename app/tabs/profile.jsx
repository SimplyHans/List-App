import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import colors from '../../constants/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
})

export default Profile