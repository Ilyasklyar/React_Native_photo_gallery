import React, { useEffect, useRef, useState } from 'react'
import { Animated, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { getProfile, newPage } from '../redux/actions/profile'
import ProfileItem from '../components/Profile/ProfileItem'


const HomeScreen = (props) => {

    const flatListRef = useRef()

    useEffect(() => {
        props.getProfileInfo(props.page)
    }, [props.getProfileInfo])

    const onPressPhoto = photo => {
        props.navigation.navigate('PhotoScreen', { photo })
    }
    const [opacity] = useState(new Animated.Value(0.2))

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start();
    }, [])

    const getNewList = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
        props.getNewPage(props.page)
        props.getProfileInfo(props.page)
    }

    return (
        <SafeAreaView>
            <Animated.FlatList style={{ opacity: opacity }}
                ref={flatListRef}
                data={props.profileList}
                renderItem={({ item }) => <ProfileItem id={item.id}
                    imageSmall={item.urls.small}
                    imagefull={item.urls.full}
                    userName={item.user.name}
                    namePhoto={item.alt_description}
                    onPressPhoto={onPressPhoto}
                />}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    getNewList()
                }}
            />
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        profileList: state.profile.profileList,
        page: state.profile.page,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getProfileInfo: page => dispatch(getProfile(page)),
        getNewPage: page => dispatch(newPage(page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

