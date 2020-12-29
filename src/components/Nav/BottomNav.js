import React, { useContext } from 'react'

import { styled } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import FavoriteIcon from '@material-ui/icons/Favorite'
import SearchIcon from '@material-ui/icons/Search'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'

import { Redirect } from "react-router-dom"
import { GlobalContext } from '../context/GlobalContext'

export default function BottomNav() {

    let {
        nav
    }= useContext(GlobalContext)

    const FancyNavigation = styled(BottomNavigation)({
        // backgroundColor: 'pink',
        // background: 'linear-gradient(45deg, rgb(56, 201, 181) 0%, rgb(45, 28, 202) 100%)',
        backgroundColor: 'rgb(219, 219, 219)',
        // color: 'green'
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 987349539
    })

    let redirectContent
    if (nav.redirectingToFavorites) {
        redirectContent = (
            <Redirect to="favorites" />
        )
    } else if (nav.redirectingToTopics) {
        redirectContent = (
            <Redirect to="topics" />
        )
    } else if (nav.redirectingToCreate) {
        redirectContent = (
            <Redirect to="create" />
        )
    } else if (nav.redirectingToActivities) {
        redirectContent = (
            <Redirect to="activities" />
        )
    } else {
        redirectContent = <div></div>
    }
    return (
        <div>
            {redirectContent}
            <FancyNavigation
                showLabels={true}
                // onChange={(event, newValue) => bottomNavigation.changeScreen(newValue) }
                >

                    <BottomNavigationAction 
                        // style={bottomNavStyle} 
                        label="Topics" 
                        icon={<SearchIcon onClick={() => nav.redirectToTopics()}/>} />

                    <BottomNavigationAction 
                        // style={bottomNavStyle} 
                        label="Favorites" 
                        icon={<FavoriteIcon onClick={() => nav.redirectToFavorites()}/>} />
                        <BottomNavigationAction 
                    // style={bottomNavStyle} 
                        label="Activities" 
                        icon={<DirectionsRunIcon onClick={() => nav.redirectToActivities()}/>} />
                    <BottomNavigationAction 
                    // style={bottomNavStyle} 
                        label="Create" 
                        icon={<AddCircleIcon onClick={() => nav.redirectToCreate()}/>} />
            </FancyNavigation>
        </div>
    )
}
