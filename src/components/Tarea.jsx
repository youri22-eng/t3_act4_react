// COMPONENTE CON PROPS
// Los props son la información que le manda el componente padre (TodoApp)
// Los desestructuro con { }, y los nombres deben ser iguales a los que
// se escriben en TodoApp.jsx.
//   texto       -> lo que dice la tarea
//   completada  -> true o false
//   onCompletar -> función que se ejecuta al marcar la casilla
//   onEliminar  -> función que se ejecuta al dar clic en Eliminar
function Tarea({ texto, completada, onCompletar, onEliminar }) {
  return (
    // En JSX se usa className en lugar de class
    // Si la tarea está completada, se le agrega la clase "completada"
    <li className={completada ? "tarea completada" : "tarea"}>
      <label>
        <input type="checkbox" checked={completada} onChange={onCompletar} />
        <span>{texto}</span>
      </label>

      {}
      <button className="boton-eliminar" onClick={onEliminar}>
        Eliminar
      </button>
    </li>
  );
}

export default Tarea;