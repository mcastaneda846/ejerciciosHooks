# Práctica de React Hooks

Este repositorio contiene una serie de ejercicios progresivos para practicar React Hooks.

La intención de estos enunciados es que los estudiantes comprendan cómo manejar estado, efectos secundarios, datos derivados, referencias, reducers, contexto y hooks personalizados dentro de componentes funcionales de React.

---

## Objetivos de aprendizaje

Al finalizar estos ejercicios, el estudiante debería ser capaz de:

- Usar `useState` para manejar estado local.
- Usar `useEffect` para ejecutar efectos secundarios.
- Sincronizar estado con APIs externas como `localStorage`.
- Consumir APIs usando `fetch`.
- Manejar estados de carga, éxito y error.
- Usar `useMemo` para calcular datos derivados.
- Usar `useRef` para manejar referencias persistentes o elementos del DOM.
- Usar `useReducer` para estados complejos.
- Usar `useContext` para compartir estado entre componentes.
- Crear custom hooks reutilizables.
- Separar responsabilidades entre componentes, hooks y lógica de negocio.

---

## Requisitos previos

Antes de iniciar, el estudiante debería conocer:

- JavaScript moderno.
- Funciones flecha.
- Arrays y métodos como `map`, `filter`, `reduce` y `find`.
- Objetos y destructuring.
- Componentes funcionales en React.
- Props.
- Renderizado condicional.
- Eventos en React.

---

## Instalación sugerida

Puedes crear el proyecto con Vite:

```bash
npm create vite@latest react-hooks-practice
cd react-hooks-practice
npm install
npm run dev
```

Durante la instalación selecciona:

```txt
Framework: React
Variant: JavaScript
```

---

## Estructura sugerida del proyecto

```txt
src/
├── exercises/
│   ├── SmartCounter.jsx
│   ├── RegisterForm.jsx
│   ├── UserSearch.jsx
│   ├── TodoApp.jsx
│   ├── UserList.jsx
│   ├── Timer.jsx
│   ├── ShoppingCart.jsx
│   ├── ProductFilter.jsx
│   ├── FocusInput.jsx
│   ├── TaskReducer.jsx
│   ├── ThemeContextApp.jsx
│   ├── AuthContextApp.jsx
│   ├── ContactForm.jsx
│   ├── PostList.jsx
│   └── UserDashboard.jsx
├── hooks/
│   ├── useForm.js
│   └── useFetch.js
├── App.jsx
└── main.jsx
```

---

# Breve explicación de los hooks

## `useState`

`useState` permite crear y actualizar estado dentro de un componente funcional.

Debe usarse cuando un dato cambia y ese cambio debe reflejarse en la interfaz.

Ejemplos comunes:

- Contador.
- Valor de un input.
- Lista de tareas.
- Estado de carga.
- Estado de un modal.
- Filtros activos.

---

## `useEffect`

`useEffect` permite ejecutar efectos secundarios después del renderizado del componente.

Un efecto secundario es cualquier operación que ocurre fuera del cálculo directo de la interfaz.

Ejemplos comunes:

- Consumir una API.
- Guardar información en `localStorage`.
- Leer información desde `localStorage`.
- Cambiar el título del navegador.
- Crear intervalos.
- Agregar o remover eventos del navegador.

Punto importante: si el efecto crea una suscripción, intervalo, listener o petición cancelable, debe tener limpieza.

---

## `useMemo`

`useMemo` permite memorizar el resultado de un cálculo para evitar recalcularlo innecesariamente en cada render.

Debe usarse para datos derivados cuando el cálculo puede ser costoso o cuando ayuda a evitar trabajo repetido.

Ejemplos comunes:

- Filtrar listas.
- Ordenar productos.
- Calcular totales.
- Calcular estadísticas.
- Procesar grandes cantidades de datos.

No debe usarse por costumbre. Si el cálculo es simple, no siempre es necesario.

---

## `useRef`

`useRef` permite guardar una referencia mutable que persiste entre renderizados y no causa un nuevo render cuando cambia.

Usos comunes:

- Acceder a un input para hacer foco.
- Guardar el ID de un intervalo.
- Mantener valores entre renders sin actualizar la interfaz.
- Referenciar elementos del DOM de manera controlada.

---

## `useReducer`

`useReducer` permite manejar estado mediante acciones y una función reducer.

Es útil cuando el estado tiene muchas operaciones posibles o cuando la lógica de actualización empieza a crecer demasiado.

Ejemplos comunes:

- Carritos de compra.
- Gestión avanzada de tareas.
- Formularios complejos.
- Estados con múltiples transiciones.

---

## `useContext`

`useContext` permite consumir información compartida mediante un contexto.

Sirve para evitar pasar props manualmente por muchos niveles de componentes.

Ejemplos comunes:

- Tema claro u oscuro.
- Usuario autenticado.
- Idioma seleccionado.
- Configuración global de la aplicación.

---

## Custom Hooks

Un custom hook es una función propia que usa hooks de React para encapsular lógica reutilizable.

Ejemplos comunes:

- `useFetch`
- `useForm`
- `useLocalStorage`
- `useDebounce`

Sirven para evitar duplicación de lógica entre componentes.

---

# Orden recomendado de desarrollo

Los ejercicios están organizados de menor a mayor complejidad:

1. Contador inteligente.
2. Formulario de registro controlado.
3. Buscador de usuarios.
4. Lista de tareas con persistencia.
5. Consumo de API con carga y error.
6. Temporizador con pausa y reinicio.
7. Carrito de compras.
8. Filtro avanzado de productos.
9. Input con foco automático.
10. Gestión de tareas con `useReducer`.
11. Tema claro y oscuro con Context API.
12. Autenticación simulada con Context API.
13. Hook personalizado para formularios.
14. Hook personalizado para consumir APIs.
15. Dashboard integrador de usuarios.

---

# Enunciados

---

## 1. Contador inteligente

### Hook principal

- `useState`

### Enunciado

Crea un componente llamado `SmartCounter` que permita manejar un contador.

El contador debe iniciar en `0`.

La aplicación debe tener tres botones:

```txt
Incrementar
Disminuir
Reiniciar
```

### Reglas

- Al presionar `Incrementar`, el contador debe aumentar en `1`.
- Al presionar `Disminuir`, el contador debe disminuir en `1`.
- El contador no puede bajar de `0`.
- Al presionar `Reiniciar`, el contador debe volver a `0`.
- Cuando el contador llegue a `10` o más, debe mostrarse el siguiente mensaje:

```txt
Has llegado al límite recomendado
```

### Objetivo

Validar que el estudiante entiende cómo crear, leer y actualizar estado con `useState`.

### Criterios de aceptación

- El contador inicia en `0`.
- El botón de incrementar funciona correctamente.
- El botón de disminuir funciona correctamente.
- El contador nunca muestra valores negativos.
- El botón de reiniciar devuelve el contador a `0`.
- El mensaje de límite aparece cuando el contador llega a `10` o más.

---

## 2. Formulario de registro controlado

### Hook principal

- `useState`

### Enunciado

Crea un formulario de registro con los siguientes campos:

```txt
Nombre
Correo electrónico
Contraseña
Confirmar contraseña
```

### Reglas

- Todos los campos son obligatorios.
- El correo debe contener `@`.
- La contraseña debe tener mínimo `8` caracteres.
- La contraseña y la confirmación deben coincidir.
- El botón de envío debe estar deshabilitado mientras el formulario sea inválido.
- Al enviar el formulario, debe mostrarse un resumen con:
  - Nombre.
  - Correo electrónico.

### Objetivo

Validar que el estudiante entiende formularios controlados, actualización de estado y validación básica en React.

### Criterios de aceptación

- Cada input está controlado por estado.
- El usuario puede escribir en todos los campos.
- Se muestran validaciones básicas.
- El botón de envío se deshabilita si el formulario no es válido.
- Al enviar, se muestra un resumen del usuario registrado.
- El formulario no debe enviarse si las contraseñas no coinciden.

---

## 3. Buscador de usuarios

### Hooks principales

- `useState`
- `useEffect`

### Enunciado

Crea un buscador de usuarios usando una lista local de datos.

La lista inicial debe tener al menos cuatro usuarios con esta estructura:

```js
{
  id: 1,
  name: "Ana",
  role: "Frontend"
}
```

### Reglas

La aplicación debe permitir:

- Mostrar todos los usuarios al cargar.
- Buscar usuarios por nombre.
- Buscar usuarios por rol.
- Actualizar la lista mientras el usuario escribe.
- Mostrar un mensaje cuando no haya resultados.
- Actualizar el título del navegador con la cantidad de usuarios encontrados.

Ejemplo del título del navegador:

```txt
3 usuarios encontrados
```

### Objetivo

Evaluar el uso de `useState` para capturar texto de búsqueda y `useEffect` para ejecutar un efecto secundario.

### Criterios de aceptación

- La lista inicial se muestra correctamente.
- El input de búsqueda actualiza el estado.
- La búsqueda funciona por nombre.
- La búsqueda funciona por rol.
- Si no hay coincidencias, se muestra un mensaje.
- El título del navegador cambia según la cantidad de resultados.

---

## 4. Lista de tareas con persistencia

### Hooks principales

- `useState`
- `useEffect`

### Enunciado

Crea una aplicación de lista de tareas.

Cada tarea debe tener esta estructura:

```js
{
  id: "abc123",
  title: "Estudiar React",
  completed: false
}
```

### Reglas

La aplicación debe permitir:

- Crear una nueva tarea.
- Marcar una tarea como completada.
- Desmarcar una tarea completada.
- Eliminar una tarea.
- Filtrar tareas por:
  - Todas.
  - Pendientes.
  - Completadas.
- Guardar las tareas en `localStorage`.
- Recuperar las tareas guardadas cuando se recargue la página.

### Objetivo

Validar que el estudiante entiende cómo sincronizar el estado de React con `localStorage` usando `useEffect`.

### Criterios de aceptación

- Se pueden agregar tareas.
- No se deben agregar tareas vacías.
- Se pueden completar y descompletar tareas.
- Se pueden eliminar tareas.
- Los filtros funcionan correctamente.
- Las tareas se guardan en `localStorage`.
- Al recargar la página, las tareas guardadas se mantienen.

---

## 5. Consumo de API con estados de carga y error

### Hooks principales

- `useState`
- `useEffect`

### Enunciado

Crea un componente llamado `UserList` que consuma usuarios desde una API pública.

Puedes usar esta API:

```txt
https://jsonplaceholder.typicode.com/users
```

### Estados requeridos

La aplicación debe manejar estos tres estados:

```txt
Cargando usuarios...
Error al cargar usuarios
Lista de usuarios
```

### Reglas

- Mostrar un mensaje de carga mientras se obtiene la información.
- Mostrar un mensaje de error si ocurre un problema.
- Mostrar la lista de usuarios si la petición es exitosa.
- Cada usuario debe mostrar al menos:
  - Nombre.
  - Correo.
  - Ciudad.
- La petición debe ejecutarse cuando el componente se monta.
- La petición debe limpiarse correctamente si el componente se desmonta antes de terminar.

### Objetivo

Evaluar el uso de `useEffect` para ejecutar lógica asíncrona y el uso de `useState` para manejar datos, carga y errores.

### Criterios de aceptación

- Se muestra estado de carga antes de recibir datos.
- Se muestran usuarios cuando la petición es exitosa.
- Se muestra error si la petición falla.
- La petición se ejecuta solo cuando corresponde.
- La solución evita actualizar estado después del desmontaje del componente.

---

## 6. Temporizador con pausa y reinicio

### Hooks principales

- `useState`
- `useEffect`
- `useRef`

### Enunciado

Crea un temporizador que cuente segundos.

La aplicación debe tener tres botones:

```txt
Iniciar
Pausar
Reiniciar
```

### Reglas

- El temporizador debe iniciar en `0`.
- Al presionar `Iniciar`, debe comenzar a contar cada segundo.
- Al presionar `Pausar`, debe detenerse.
- Al presionar `Iniciar` nuevamente, debe continuar desde el valor actual.
- Al presionar `Reiniciar`, debe volver a `0`.
- El intervalo debe limpiarse correctamente para evitar fugas de memoria.

### Objetivo

Validar que el estudiante entiende cómo trabajar con intervalos, limpieza de efectos y referencias persistentes.

### Criterios de aceptación

- El temporizador inicia en `0`.
- El botón iniciar activa el conteo.
- El botón pausar detiene el conteo.
- El botón reiniciar vuelve el contador a `0`.
- No se crean múltiples intervalos innecesarios.
- El intervalo se limpia correctamente.

---

## 7. Carrito de compras

### Hooks principales

- `useState`
- `useMemo`

### Enunciado

Crea un carrito de compras simple.

Cada producto debe tener esta estructura:

```js
{
  id: 1,
  name: "Teclado",
  price: 120,
  quantity: 1
}
```

### Reglas

La aplicación debe permitir:

- Mostrar una lista de productos en el carrito.
- Aumentar la cantidad de un producto.
- Disminuir la cantidad de un producto.
- Evitar que la cantidad sea menor que `1`.
- Eliminar un producto del carrito.
- Mostrar el subtotal de cada producto.
- Mostrar el total general del carrito.
- Mostrar la cantidad total de productos.

### Objetivo

Evaluar que el estudiante entiende la diferencia entre estado real y datos derivados.

El total general y la cantidad total deben calcularse a partir del carrito, no guardarse como estados independientes.

### Criterios de aceptación

- Los productos se muestran correctamente.
- Se puede aumentar la cantidad de cada producto.
- Se puede disminuir la cantidad de cada producto.
- La cantidad nunca baja de `1`.
- Se pueden eliminar productos.
- El subtotal de cada producto se calcula correctamente.
- El total general se calcula correctamente.
- La cantidad total de productos se calcula correctamente.
- Los totales no deben manejarse como estado independiente si pueden derivarse del carrito.

---

## 8. Filtro avanzado de productos

### Hooks principales

- `useState`
- `useMemo`

### Enunciado

Crea una tabla de productos.

Cada producto debe tener esta estructura:

```js
{
  id: 1,
  name: "Laptop",
  category: "Tecnología",
  price: 2500,
  stock: 5
}
```

### Reglas

La aplicación debe permitir:

- Buscar productos por nombre.
- Filtrar productos por categoría.
- Ordenar productos por precio:
  - Menor a mayor.
  - Mayor a menor.
- Mostrar solo productos con stock disponible.
- Mostrar cuántos productos cumplen con los filtros aplicados.
- Mostrar un mensaje cuando no haya productos disponibles con los filtros seleccionados.

### Objetivo

Evaluar el uso de `useMemo` para calcular listas filtradas y ordenadas a partir del estado.

### Criterios de aceptación

- La tabla muestra productos correctamente.
- El buscador filtra por nombre.
- El filtro de categoría funciona correctamente.
- El ordenamiento por precio funciona en ambos sentidos.
- El filtro de stock disponible funciona correctamente.
- Se muestra la cantidad de productos filtrados.
- Se muestra un mensaje si no hay resultados.
- La lista filtrada y ordenada se calcula como dato derivado.

---

## 9. Input con foco automático

### Hooks principales

- `useState`
- `useEffect`
- `useRef`

### Enunciado

Crea un componente de búsqueda con un campo de texto.

### Reglas

- El input debe recibir foco automáticamente cuando el componente se monta.
- Debe existir un botón llamado:

```txt
Enfocar buscador
```

- Al presionar el botón, el foco debe volver al input.
- El texto escrito por el usuario debe mostrarse debajo del input.
- No se permite usar:
  - `document.querySelector`
  - `getElementById`
  - Manipulación directa del DOM fuera del mecanismo de refs de React.

### Objetivo

Validar el uso correcto de `useRef` para acceder a elementos del DOM de forma controlada en React.

### Criterios de aceptación

- El input recibe foco al montar el componente.
- El botón devuelve el foco al input.
- El texto escrito se muestra en pantalla.
- La solución usa `useRef`.
- La solución no usa selectores manuales del DOM.

---

## 10. Gestión de tareas con `useReducer`

### Hook principal

- `useReducer`

### Enunciado

Crea una aplicación de gestión de tareas usando `useReducer`.

Cada tarea debe tener esta estructura:

```js
{
  id: "abc123",
  title: "Aprender useReducer",
  completed: false
}
```

### Reglas

La aplicación debe permitir:

- Agregar tareas.
- Marcar tareas como completadas.
- Desmarcar tareas completadas.
- Editar el título de una tarea.
- Eliminar tareas.
- Eliminar todas las tareas completadas.

El reducer debe manejar acciones como:

```txt
ADD_TASK
TOGGLE_TASK
EDIT_TASK
DELETE_TASK
CLEAR_COMPLETED
```

### Objetivo

Evaluar cuándo conviene usar `useReducer` en lugar de varios `useState`, especialmente cuando el estado tiene múltiples operaciones.

### Criterios de aceptación

- La lógica principal de tareas está centralizada en un reducer.
- Se pueden agregar tareas.
- Se pueden completar y descompletar tareas.
- Se pueden editar tareas.
- Se pueden eliminar tareas individuales.
- Se pueden eliminar todas las completadas.
- Las acciones tienen nombres claros.
- El reducer no muta directamente el estado.

---

## 11. Tema claro y oscuro con Context API

### Hooks principales

- `useState`
- `useContext`

### Enunciado

Crea una aplicación con soporte para tema claro y oscuro.

### Reglas

- Crear un contexto llamado `ThemeContext`.
- El usuario debe poder cambiar entre tema claro y oscuro.
- El tema activo debe afectar visualmente al menos tres componentes diferentes.
- Debe mostrarse en pantalla el tema actual.
- No se debe pasar el tema manualmente por props a todos los componentes.

### Objetivo

Validar el uso de `useContext` para compartir estado global simple entre componentes.

### Criterios de aceptación

- Existe un contexto para el tema.
- Se puede alternar entre tema claro y oscuro.
- Al menos tres componentes reaccionan al cambio de tema.
- Se muestra el tema actual.
- La solución evita prop drilling innecesario.

---

## 12. Autenticación simulada con Context API

### Hooks principales

- `useState`
- `useContext`

### Enunciado

Crea una autenticación simulada.

La aplicación debe tener:

```txt
Pantalla de login
Pantalla de perfil
Botón para cerrar sesión
```

### Reglas

- El usuario puede iniciar sesión escribiendo su nombre.
- Cuando inicia sesión, debe mostrarse la pantalla de perfil.
- El nombre del usuario debe estar disponible desde distintos componentes usando contexto.
- Al cerrar sesión, debe volver a mostrarse el formulario de login.
- No se debe usar una API real.

### Objetivo

Evaluar el uso de Context API para compartir información de usuario en varios componentes.

### Criterios de aceptación

- Existe un contexto para la autenticación.
- El usuario puede iniciar sesión con un nombre.
- El perfil muestra el nombre del usuario.
- Componentes distintos pueden acceder al usuario autenticado.
- Se puede cerrar sesión.
- Al cerrar sesión, se vuelve a la pantalla de login.

---

## 13. Hook personalizado para formularios

### Hooks principales

- `useState`
- Custom hook

### Enunciado

Crea un hook personalizado llamado `useForm`.

El hook debe permitir:

- Guardar los valores de un formulario.
- Actualizar campos dinámicamente.
- Reiniciar el formulario.
- Validar campos obligatorios.

Luego usa ese hook en un formulario de contacto con los campos:

```txt
Nombre
Email
Mensaje
```

### Reglas

El formulario debe:

- Validar que ningún campo esté vacío.
- Mostrar errores por campo.
- Permitir limpiar todos los campos.
- Mostrar los datos enviados al hacer submit.

### Objetivo

Evaluar si el estudiante puede extraer lógica repetible de formularios en un hook personalizado.

### Criterios de aceptación

- Existe un hook llamado `useForm`.
- El hook maneja valores del formulario.
- El hook permite actualizar campos.
- El hook permite reiniciar el formulario.
- El hook permite validar campos obligatorios.
- El formulario de contacto usa el hook.
- Se muestran errores por campo.
- Se muestran los datos enviados.

---

## 14. Hook personalizado para consumir APIs

### Hooks principales

- `useState`
- `useEffect`
- Custom hook

### Enunciado

Crea un hook personalizado llamado `useFetch`.

El hook debe recibir una URL y retornar:

```js
{
  (data, loading, error);
}
```

Luego usa el hook para consumir publicaciones desde:

```txt
https://jsonplaceholder.typicode.com/posts
```

### Reglas

- Mostrar estado de carga.
- Mostrar error si ocurre un problema.
- Mostrar los datos si la petición es exitosa.
- La petición debe volver a ejecutarse si cambia la URL.
- La petición debe limpiarse si el componente se desmonta antes de terminar.

### Objetivo

Evaluar si el estudiante puede encapsular lógica asíncrona reutilizable en un custom hook.

### Criterios de aceptación

- Existe un hook llamado `useFetch`.
- El hook recibe una URL.
- El hook retorna `data`, `loading` y `error`.
- El componente consumidor usa el hook.
- Se muestra estado de carga.
- Se muestra estado de error.
- Se muestran los datos correctamente.
- La petición se vuelve a ejecutar si cambia la URL.
- La petición se limpia correctamente.

---

## 15. Dashboard integrador de usuarios

### Hooks principales

- `useState`
- `useEffect`
- `useMemo`
- Opcional: `useReducer`
- Opcional: custom hooks

### Enunciado

Crea un dashboard de administración de usuarios.

Cada usuario debe tener esta estructura:

```js
{
  id: 1,
  name: "Ana Pérez",
  email: "ana@email.com",
  role: "admin",
  active: true
}
```

### Reglas

La aplicación debe permitir:

- Listar usuarios.
- Buscar usuarios por nombre o correo.
- Filtrar usuarios por rol.
- Filtrar usuarios activos e inactivos.
- Cambiar el estado activo/inactivo de un usuario.
- Eliminar usuarios.
- Mostrar estadísticas:
  - Total de usuarios.
  - Usuarios activos.
  - Usuarios inactivos.
  - Cantidad de administradores.
- Guardar los usuarios en `localStorage`.
- Recuperar los usuarios cuando se recargue la página.
- Separar la solución en componentes reutilizables.

### Objetivo

Evaluar la integración de varios hooks en una solución más cercana a un caso real.

Este ejercicio permite medir si el estudiante entiende:

- Estado.
- Efectos secundarios.
- Datos derivados.
- Persistencia.
- Separación de responsabilidades.
- Reutilización de lógica.

### Criterios de aceptación

- Los usuarios se muestran correctamente.
- La búsqueda funciona por nombre y correo.
- El filtro por rol funciona.
- El filtro por estado activo/inactivo funciona.
- Se puede cambiar el estado de un usuario.
- Se pueden eliminar usuarios.
- Las estadísticas se calculan correctamente.
- Los usuarios se guardan en `localStorage`.
- Los usuarios persisten después de recargar la página.
- La solución está separada en componentes reutilizables.
- Los datos derivados no se guardan innecesariamente como estado.

---

# Criterios generales de evaluación

| Criterio                             | Peso |
| ------------------------------------ | ---: |
| Uso correcto de `useState`           |  20% |
| Formularios controlados              |  10% |
| Uso correcto de `useEffect`          |  20% |
| Limpieza de efectos                  |  10% |
| Manejo correcto de datos derivados   |  10% |
| Uso adecuado de `useMemo`            |  10% |
| Uso adecuado de `useRef`             |   5% |
| Uso adecuado de `useReducer`         |   5% |
| Uso adecuado de `useContext`         |   5% |
| Claridad y separación de componentes |   5% |

---

# Reglas generales para todos los ejercicios

## 1. No mutar el estado directamente

Incorrecto:

```js
task.completed = true;
setTasks(tasks);
```

Correcto:

```js
setTasks((prevTasks) =>
  prevTasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  ),
);
```

---

## 2. No usar `useEffect` para cálculos simples

Incorrecto:

```js
const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(price * quantity);
}, [price, quantity]);
```

Correcto:

```js
const total = price * quantity;
```

---

## 3. No guardar datos derivados como estado innecesario

Incorrecto:

```js
const [totalProducts, setTotalProducts] = useState(0);
```

Mejor:

```js
const totalProducts = cart.reduce(
  (total, product) => total + product.quantity,
  0,
);
```

---

## 4. Limpiar efectos cuando sea necesario

Si un efecto crea un intervalo, listener o petición cancelable, debe limpiarse.

Ejemplo:

```js
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Ejecutando intervalo");
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

---

## 5. No manipular el DOM directamente

Evitar:

```js
document.querySelector("#search");
document.getElementById("search");
```

Preferir:

```js
const inputRef = useRef(null);
```

---

## 6. Separar responsabilidades

Cuando un componente crece demasiado, dividirlo en componentes más pequeños.

Ejemplo:

```txt
UserDashboard
├── UserFilters
├── UserStats
├── UserTable
└── UserRow
```

---

# Recomendación de entrega

Cada ejercicio debe entregarse en un componente separado dentro de la carpeta `src/exercises`.

Ejemplo:

```txt
src/exercises/SmartCounter.jsx
```

Para los custom hooks, usar la carpeta `src/hooks`.

Ejemplo:

```txt
src/hooks/useFetch.js
src/hooks/useForm.js
```

---

# Formato sugerido para cada entrega

Cada estudiante debería entregar:

```txt
Nombre del ejercicio:
Archivo principal:
Hooks utilizados:
Descripción breve de la solución:
Dificultades encontradas:
```

Ejemplo:

```txt
Nombre del ejercicio: Lista de tareas con persistencia
Archivo principal: TodoApp.jsx
Hooks utilizados: useState, useEffect
Descripción breve: Se creó una lista de tareas que permite agregar, completar, eliminar y filtrar tareas. Los datos se guardan en localStorage.
Dificultades encontradas: Manejo inicial de localStorage y actualización del estado sin mutarlo.
```

---

# Recomendación para revisión del docente

Durante la revisión, no evaluar únicamente que la interfaz funcione.

También revisar:

- Si el estado se actualiza de forma inmutable.
- Si los efectos tienen dependencias correctas.
- Si los efectos se limpian cuando corresponde.
- Si los datos derivados se calculan correctamente.
- Si el estudiante evita usar `useEffect` innecesariamente.
- Si los componentes tienen responsabilidades claras.
- Si los nombres de variables y funciones son entendibles.
- Si los custom hooks realmente encapsulan lógica reutilizable.

---

# Conclusión

Estos ejercicios están diseñados para avanzar gradualmente desde el manejo básico de estado hasta patrones más estructurados en React.

El orden recomendado ayuda a construir una comprensión sólida antes de llegar a casos más completos como dashboards, contexto global o hooks personalizados.
