import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ProfileItem = (props) => {
 // console.log('qqqq', props.id);
  return (
    <View style={styles.itemlist}>
      <View>
      <TouchableOpacity
        style={styles.button}
        onPress={()=> props.onPressPhoto(props.imagefull)}
      >
        <Image style={styles.img}
          source={{
            uri: `${props.imageSmall}`,
          }}
        />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.author}>{props.userName}</Text>
        <Text style={styles.photoName}>{props.namePhoto}</Text>
      </View>
    </View>
  )
}
export default ProfileItem

const styles = StyleSheet.create({
  itemlist: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    alignItems: 'flex-start'
  },
  img: {
    width: 100,
    height: 100,
    margin: 15
  },
  author: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    width: 150
  },
  photoName: {
    fontWeight: '400',
    width: 180
  }
});
