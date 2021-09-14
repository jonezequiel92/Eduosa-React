import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@material-ui/core";
  import AccountCircleIcon from "@material-ui/icons/AccountCircle";
  import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
  import AddToQueueIcon from '@material-ui/icons/AddToQueue';
  import AssessmentIcon from '@material-ui/icons/Assessment';
  import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Listas = () => {
    return (
        <div>
        <List component="nav" aria-label="cicle">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Mi Perfil" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Carrito" />
          </ListItem>
        <Divider />
        <ListItem button>
            <ListItemIcon>
              <AddToQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Cursos" />
          </ListItem>
        <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Calificaciones" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Mensajes" />
        </ListItem>
    
        </List>
      </div>
    )
}

export default Listas
