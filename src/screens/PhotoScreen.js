import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const PhotoScreen = props => {

  return (
    <View>
      <Image style={styles.img}
        source={{
          uri: `${props.route.params.photo}`,
        }}
      />
    </View>
  )
}

export default PhotoScreen


const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%'
  }
});