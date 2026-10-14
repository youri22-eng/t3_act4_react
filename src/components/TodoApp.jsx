// useState es un hook de React: le da un estado (una "memoria") al componente.
import { useState } from "react";
import Tarea from "./Tarea";

// RECIBO LOS PROPS que manda App. Los desestructuro con { }.
// Los nombres tienen que ser exactamente los mismos que se escriben en App.jsx.
function TodoApp({ notasIniciales, tituloLista, subtituloLista }) {
  // COMPONENTE CON ESTADO (inciso c de la actividad).
  // useState devuelve un arreglo con dos cosas: el estado y la función
  // para cambiarlo. Aquí se desestructura ese arreglo.

  // ESTADO 1: la lista de tareas. Su valor inicial viene por props.
  const [tareas, setTareas] = useState(notasIniciales);

  // ESTADO 2: lo que se está escribiendo en el input.
  const [textoNuevo, setTextoNuevo] = useState("");

  // ESTADO 3: si es true, se ocultan las tareas completadas.
  const [ocultarCompletadas, setOcultarCompletadas] = useState(false);

  // EVENTO: agregar una tarea nueva.
  function agregarTarea() {
    const textoLimpio = textoNuevo.trim();

    // Si el campo está vacío, se avisa y no se agrega nada.
    if (textoLimpio === "") {
      alert("Escribe algo para agregar a la lista.");
      return;
    }

    const nuevaTarea = {
      id: crypto.randomUUID(), // id único, igual que en el curso
      texto: textoLimpio,
      completada: false,
    };

    // En React no se modifica el arreglo original. Se crea uno nuevo con
    // las tareas de antes (...tareas) más la nueva.
    setTareas([...tareas, nuevaTarea]);

    // Se limpia el input.
    setTextoNuevo("");
  }

  // EVENTO: marcar o desmarcar una tarea como completada.
  function completarTarea(id) {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        // Se copia la tarea y se invierte el valor de "completada".
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea; // las demás se quedan igual
    });
    setTareas(tareasActualizadas);
  }

  // EVENTO: eliminar una tarea. filter deja solo las que tengan un id distinto.
  function eliminarTarea(id) {
    const tareasRestantes = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasRestantes);
  }

  // Si el filtro está activo, se muestran solo las pendientes.
  let tareasVisibles = tareas;
  if (ocultarCompletadas === true) {
    tareasVisibles = tareas.filter((tarea) => tarea.completada === false);
  }

  // Cuántas tareas faltan por hacer.
  const pendientes = tareas.filter((tarea) => tarea.completada === false).length;

  return (
    <section className="todo">
      {/* Estos textos llegaron por props desde App. */}
      <h2>{tituloLista}</h2>
      <p className="subtitulo">{subtituloLista}</p>

      <div className="formulario">
        {/* Input controlado: su valor viene del estado textoNuevo. */}
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={textoNuevo}
          onChange={(evento) => setTextoNuevo(evento.target.value)}
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              agregarTarea();
            }
          }}
        />
        {/* La función se pasa como referencia (agregarTarea), SIN paréntesis.
            Si se escribiera agregarTarea() se ejecutaría al cargar la página. */}
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <button
        className="boton-filtro"
        onClick={() => setOcultarCompletadas(!ocultarCompletadas)}
      >
        {ocultarCompletadas ? "Mostrar completadas" : "Ocultar completadas"}
      </button>

      {/* RENDERIZADO CONDICIONAL: si no hay tareas se muestra un mensaje,
          y si sí hay, se muestra la lista. */}
      {tareasVisibles.length === 0 ? (
        <p className="vacio">No hay tareas para mostrar.</p>
      ) : (
        <ul className="lista">
          {/* LISTA CON .map() Y KEY (inciso d de la actividad).
              Por cada tarea del arreglo se dibuja un componente <Tarea />.
              La key es el id: debe ser distinta en cada elemento para que
              React los pueda identificar cuando la lista cambia. */}
          {tareasVisibles.map((tarea) => (
            <Tarea
              key={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              // Se usa una función flecha porque hay que mandar el id de esta tarea.
              onCompletar={() => completarTarea(tarea.id)}
              onEliminar={() => eliminarTarea(tarea.id)}
            />
          ))}
        </ul>
      )}

      <p className="contador">Tareas pendientes: {pendientes}</p>
    </section>
  );
}

export default TodoApp;