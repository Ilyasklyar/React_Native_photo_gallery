import React, { useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getProfile, newPage } from '../redux/actions/profile'
import ProfileItem from '../components/Profile/ProfileItem'


const HomeScreen = (props) => {

    useEffect(() => {
        props.getProfileInfo(props.page)
    }, [props.getProfileInfo])

    const onPressPhoto = photo => {
        props.navigation.navigate('PhotoScreen', { photo })
    }

    const getNewList = () => {
        props.getNewPage(props.page)
        props.getProfileInfo(props.page)
        console.log('123123', props.page);
    }
    return (
        <SafeAreaView>
            <FlatList
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
                onEndReached={() => getNewList()}
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