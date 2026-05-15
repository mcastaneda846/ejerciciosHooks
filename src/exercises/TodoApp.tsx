import { useState, useEffect } from "react";

export default function TodoApp() {
  // ESTADO TAREAS
  const [tasks, setTasks] = useState([]);

  // INPUT NUEVA TAREA
  const [title, setTitle] = useState("");

  // FILTRO
  const [filter, setFilter] = useState("all");

  // CARGAR DESDE LOCALSTORAGE
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // GUARDAR EN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CREAR TAREA
  function addTask(e) {
    e.preventDefault();

    if (title.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  }

  // COMPLETAR / DESMARCAR
  function toggleTask(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updated);
  }

  // ELIMINAR TAREA
  function deleteTask(id) {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  }

  // FILTROS
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h2>Lista de tareas</h2>

      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>

      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* TÍTULO */}
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Desmarcar" : "Hecho"}
            </button>

            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
