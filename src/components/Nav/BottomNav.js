import React from 'react'

import { styled } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import FavoriteIcon from '@material-ui/icons/Favorite'
import SearchIcon from '@material-ui/icons/Search'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

export default function BottomNav() {

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

    return (
        <div>
            <FancyNavigation
                showLabels={true}
                // onChange={(event, newValue) => bottomNavigation.changeScreen(newValue) }
                >

                    <BottomNavigationAction 
                        // style={bottomNavStyle} 
                        label="Topics" 
                        icon={<SearchIcon onClick={() => console.log('topics')}/>} />

                    <BottomNavigationAction 
                        // style={bottomNavStyle} 
                        label="Favorites" 
                        icon={<FavoriteIcon onClick={() => console.log('favorites')}/>} />
            </FancyNavigation>
        </div>
    )
}
