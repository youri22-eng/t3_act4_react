import "./App.css";
import Encabezado from "./components/Encabezado";
import TodoApp from "./components/TodoApp";

// App es el componente principal: es el PADRE de los demás
function App() {
  // Arreglo de objetos con las tareas iniciales.
  
  const notasIniciales = [
    { id: crypto.randomUUID(), texto: "Terminar la actividad de React", completada: false },
    { id: crypto.randomUUID(), texto: "Subir el proyecto a GitHub", completada: false },
    { id: crypto.randomUUID(), texto: "Repasar props y estado", completada: true },
  ];

  // Objeto con los textos que se van a mandar como props
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