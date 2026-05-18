import {
  useReducer,
  useState,
} from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: string }
  | {
      type: "EDIT_TASK";
      payload: {
        id: string;
        title: string;
      };
    }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "CLEAR_COMPLETED" };

function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task,
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "CLEAR_COMPLETED":
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
}

export default function TodoReducerApp() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const [title, setTitle] = useState("");

  // AGREGAR TAREA
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: title,
    });

    setTitle("");
  }

  // CAMBIAR INPUT
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  // EDITAR TAREA
  function handleEdit(task: Task) {
    const newTitle = prompt("Editar tarea", task.title);

    if (!newTitle || newTitle.trim() === "") return;

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        title: newTitle,
      },
    });
  }

  return (
    <div>
      <h2>Gestión de tareas con useReducer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={title}
          onChange={handleChange}
        />

        <button type="submit">Agregar</button>
      </form>

      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Eliminar completadas
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TASK",
                  payload: task.id,
                })
              }
            >
              {task.completed ? "Desmarcar" : "Completar"}
            </button>

            <button onClick={() => handleEdit(task)}>
              Editar
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: task.id,
                })
              }
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}