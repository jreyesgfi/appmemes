import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('Linea 1');
  const [linea2, setLinea2] = useState('');

  const onChangeLineas = function(valor) {
    alert(valor);
  }
  return (
    <div className="App">

      {// Selec picker
      }
      <select>
        <option value= "./imagenes/azul_oscuro">Azul oscuro</option>
        <option value= "azul_claro">Azul claro</option>
        <option value= "amarillo">Amarillo</option>
        <option value= "verde">Verde</option>
        <option>Rojo</option>
        <option>negro</option>
      </select>  <br/>
      {// Input text- Primer linea
      }
      <input type="text" onChange={onChangeLineas} placeholder = "Linea 1"/> <br/>

      {// Input text- Segunda linea
      }
      <input type="text" placeholder = "Linea 2"/> <br/>

      {// Botón exportar
      }
      <button>Exportar</button>

      {/* Espacio para la foto */}
      <div>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src= ""/>
      </div>

    </div>
  );
}

export default App;
