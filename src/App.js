import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('Linea 1');
  const [linea2, setLinea2] = useState('Linea 2');
  const [imagen, setImagen] = useState('negro');

  const onChangeLineas = function(event,setLinea) {
    setLinea(event.target.value); {/*Modifica el valor de linea1 y renderiza el elemento html5*/}
  }
  return (
    <div className="App">

      {// Selec picker
      }
      <select onChange={(event)=>onChangeLineas(event,setImagen)}>
        <option value= "./imagenes/azul_oscuro">Azul oscuro</option>
        <option value= "azul_claro">Azul claro</option>
        <option value= "amarillo">Amarillo</option>
        <option value= "verde">Verde</option>
        <option>Rojo</option>
        <option>negro</option>
      </select>  <br/>
      {// Input text- Primer linea
      }
      <input type="text" onChange={(event)=>onChangeLineas(event,setLinea1)} placeholder = "Linea 1"/> <br/>

      {// Input text- Segunda linea
      }
      <input type="text" onChange={(event)=>onChangeLineas(event,setLinea2)} placeholder = "Linea 2"/> <br/>

      {// Botón exportar
      }
      <button>Exportar</button>

      {/* Espacio para la foto */}
      <div className= "Wallpaper">
        <span id="linea1">{linea1}</span> <br/>
        <span id="linea2">{linea2}</span> <br/>
        <img src= {"/imagenes/" + imagen +".jpg"}/>
      </div>

    </div>
  );
}

export default App;
