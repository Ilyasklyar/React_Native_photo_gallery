export const getProfileSuccess = data => {
    return {
        type: "GET_PROFILE_LIST",
        data
    }
}

export const getProfile = page => {
    return (dispatch) => {
        fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)

            .then(response => response.json())

            .then(data => dispatch(getProfileSuccess(data)))
    }
}


export const newPage = data => {
    return {
        type: "GET_NEW_PAGE",
        data
    }
}