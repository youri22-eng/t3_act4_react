# Lista de tareas con React

**Alumno:** Ruiz Chavez Youri Jorkaeff

## Descripción del proyecto

Este es mi primer proyecto con React, hecho siguiendo el curso de React desde cero con Vite. Es una lista de tareas donde se pueden agregar tareas, marcarlas como completadas, eliminarlas y ocultar las que ya están hechas. También muestra cuántas tareas faltan por hacer. No usa ninguna API.

## Tecnologías

- React
- Vite
- JavaScript (JSX) y CSS
- gh-pages, para publicar el proyecto en GitHub Pages

## Componentes

| Componente | Qué hace |
|---|---|
| `App` | Es el componente principal. Crea el arreglo de tareas y se lo pasa por props a `TodoApp`. |
| `Encabezado` | Componente funcional simple que muestra el título de la página. |
| `TodoApp` | Recibe props de `App`, guarda las tareas en su estado con `useState` y las dibuja con `.map()`. |
| `Tarea` | Recibe props (`texto`, `completada`, `onCompletar`, `onEliminar`) y dibuja una sola tarea. |

## Cómo ejecutarlo en mi computadora

```bash
npm install
npm run dev
```

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Los props son la información que un componente padre le manda a un componente hijo. El hijo solo la puede leer, no cambiarla. El state es la información que el componente guarda por su cuenta, como una variable propia, y sí la puede cambiar con su función; cada componente tiene su propio estado. Cuando el state cambia, React vuelve a dibujar solo lo que cambió. En mi proyecto, `App` le manda las tareas iniciales a `TodoApp` como props, y `TodoApp` las guarda en su state para poder agregarlas, eliminarlas o marcarlas.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

React pide una key cuando dibujamos elementos con `.map()`. Tiene que ser distinta para cada elemento, porque así React identifica cuál es cuál. Cuando agrego, borro o cambio una tarea, React sabe cuál cambió y actualiza solo esa, sin dibujar toda la lista otra vez. Si no hay key, muestra una advertencia y puede confundir los elementos. En mi proyecto uso el `id` de cada tarea, creado con `crypto.randomUUID()`, que casi nunca se repite.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un hook de React que le da un estado a un componente, es decir, una especie de variable que React vigila. Se le pasa un valor inicial y devuelve dos cosas dentro de un arreglo: el valor actual del estado y una función para cambiarlo. Cuando uso esa función, React actualiza en la pantalla solo la parte que cambió, sin recargar toda la página. En mi mini aplicación la usé en `TodoApp`. Por ejemplo, `const [tareas, setTareas] = useState(notasIniciales)` guarda la lista de tareas, y `const [textoNuevo, setTextoNuevo] = useState("")` guarda lo que escribo en el campo de texto. También la usé para saber si se ocultan las tareas completadas.

### d) Enlace del repositorio de GitHub

https://github.com/youri22-eng/t3_act4_react

### e) Enlace del proyecto desplegado en GitHub Pages

https://youri22-eng.github.io/t3_act4_react/