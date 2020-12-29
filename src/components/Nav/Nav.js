import React, {useContext} from 'react'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { GlobalContext } from '../context/GlobalContext'

import firebase from 'firebase/app'
import 'firebase/auth'

export default function Nav() {

    let {
        auth
    } = useContext(GlobalContext)

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const dropdownStyle = {
        fontSize: '50px'
    }
    const menuStyle = {
        backgroundColor: 'rgb(219, 219, 219)'
    }
    const menuStyle2 = {
        zIndex: '5903384987328'
    }
    const dropdownItemStyle = {
        textDecoration: 'none', 
        textAlign: 'center', 
        width: '100%',
        color: 'black',
        fontSize: '1.4rem',
        fontWeight: '600',
        paddingTop: '8px',
        paddingBottom: '8px'
    }

    let dropdownContent

    if (auth.signedIn) {
        dropdownContent = (
            <Menu
                id='nav-menu'
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={menuStyle2}
                MenuListProps={{ disablePadding: true }}
                transitionDuration={500}
            >
                <MenuItem onClick={() => {
                    firebase.auth().signOut()
                    .then(() => {
                        handleClose()
                        setTimeout(() => {
                            auth.signOut()
                        }, 500)
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                }} style={menuStyle}>
                    <Link to='/' style={dropdownItemStyle}>
                        Sign Out
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} style={menuStyle}>
                    <Link to='/dev' style={dropdownItemStyle}>
                        dev
                    </Link>
                </MenuItem>
            </Menu>
        )
    } else {
        dropdownContent = (
            <Menu
                id='nav-menu'
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={menuStyle2}
                MenuListProps={{ disablePadding: true }}
                transitionDuration={500}
            >
                <MenuItem onClick={handleClose} style={menuStyle}>
                    <Link to='/login' style={dropdownItemStyle}>
                        Login
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} style={menuStyle}>
                    <Link to='/signup' style={dropdownItemStyle}>
                        Sign Up
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} style={menuStyle}>
                    <Link to='/dev' style={dropdownItemStyle}>
                        dev
                    </Link>
                </MenuItem>
            </Menu>
        )
    }


    return (
        <div className='nav-container'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                {/* LOGO */}
                <div className='nav-brand'>IBM</div>
            </Link>
            <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick}>
                <MoreHorizIcon style={dropdownStyle}/>
            </Button>
            {dropdownContent}
      </div>
    )
}
