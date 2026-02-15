import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { initialColaboradores, initialEquipos } from './data/initialData';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState(initialColaboradores);
  const [equipos, actualizarEquipos] = useState(initialEquipos);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  /**
   * Registers a new collaborator.
   * @param {Object} colaborador - The collaborator object to add.
   */
  const registrarColaborador = (colaborador) => {

    actualizarColaboradores([...colaboradores, colaborador]);
  };

  /**
   * Deletes a collaborator by ID.
   * @param {string} id - The ID of the collaborator to delete.
   */
  const eliminarColaborador = (id) => {

    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  /**
   * Updates the primary color of a team.
   * @param {string} color - The new color.
   * @param {string} id - The team ID.
   */
  const actualizarColor = (color, id) => {

    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  /**
   * Creates a new team.
   * @param {Object} nuevoEquipo - The new team object.
   */
  const crearEquipo = (nuevoEquipo) => {

    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  /**
   * Toggles the 'like' status of a collaborator.
   * @param {string} id - The collaborator ID.
   */
  const like = (id) => {

    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
