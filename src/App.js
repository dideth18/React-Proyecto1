import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Lo que los ingenieros piensan acerca de su carrera: </h1>
        <Testimonio
          nombre='Brandon Pensamiento'
          pais='Guatemala'
          imagen='brandon'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Uno de los peores defectos que tienen los que desarrollan software es la inconstancia: acumular tareas lo que trae agobio, las prisas, las horas extras y aquí comienza a resentirse la calidad del trabajo.'/>
        <Testimonio
          nombre='Sarahi Meza'
          pais='Nicaragua'
          imagen='sarahi'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='No puedes encajar fácilmente a las mujeres en una estructura que ya está codificada como masculina; tienes que cambiar la estructura'/>
        <Testimonio 
          nombre='Nicole Valdez'
          pais='España'
          imagen='nicole'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Emplea tu tiempo cultivándote  a través de los escritos de otros, así ganaras fácilmente lo que para nosotros ha sido una dura tarea.'/>
      </div>
    </div>
  );
}

export default App;
