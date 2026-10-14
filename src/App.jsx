import "./App.css";
import Encabezado from "./components/Encabezado";
import TodoApp from "./components/TodoApp";

function App() {
  // Arreglo de objetos con las tareas iniciales.
  // Cada tarea lleva un id único creado con crypto.randomUUID()
  const notasIniciales = [
    { id: crypto.randomUUID(), texto: "Terminar la actividad de React", completada: false },
    { id: crypto.randomUUID(), texto: "Subir el proyecto a GitHub", completada: false },
    { id: crypto.randomUUID(), texto: "Repasar props y estado", completada: true },
  ];

  // Objeto con los textos que se van a pasar como propS
  const titulosLista = {
    tituloLista: "Mis pendientes",
    subtituloLista: "Marca las tareas que ya terminaste",
  };

  return (
    <div className="contenedor">
      <Encabezado />

      {}
      <TodoApp notasIniciales={notasIniciales} {...titulosLista} />
    </div>
  );
}

export default App;