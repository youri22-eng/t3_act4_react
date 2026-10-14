// COMPONENTE FUNCIONAL SIMPLE
// Es una función que empieza con mayúscula y devuelve JSX
// No recibe nada, solo muestra el título de la página.
function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Mi lista de tareas</h1>
      <p>Hecha con React + Vite</p>
    </header>
  );
}

// Se exporta para poder importarlo en otros archivos (como App.jsx).
export default Encabezado;