import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
// import theme from '../temaConfig'


const useStyle = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    mButton:{
        marginRight: theme.spacing(2)
    }, 
    title: {
        flexGrow:1
    }
}))


const Navbar = () => {

    const clases = useStyle()

    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                  <IconButton color="inherit" aria-label="Menu" className={clases.mButton}>
                    <MenuIcon />
                  </IconButton>
                <Typography variant="h6" className= {clases.title}>
                  Eduosa
                </Typography>
                <Button variant="text" color="inherit" > Login </Button>
              </Toolbar>
            </AppBar>
            <div className= {clases.offset} ></div>
           
        </div>
    )
}

export default Navbar
