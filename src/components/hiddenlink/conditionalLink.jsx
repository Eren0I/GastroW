import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'

const ShowOnLogOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (    !isLoggedIn) {
        return children
    }
    return null
};


export default ShowOnLogOut