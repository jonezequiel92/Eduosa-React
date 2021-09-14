
import React from 'react';


// Componentes MUI
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'



// Crear archivo con configuración del tema
import theme from './temaConfig'


//Componentes JSX
import Navbar from './components/Navbar';
import Listas from './components/Listas';
 


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Button variant="contained" color="primary"> Boton
      </Button>
      <Button variant="contained" color="secondary"> Boton
      </Button>
      <Listas />
    </ThemeProvider>
  );
}

export default App;
