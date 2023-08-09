import React, { useState } from "react";
import "./Todo.css";

function Todolist() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [editMode, setEditMode] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), title: newTask }]);
      setNewTask("");
    }
  };

  const deleteAllTasks = () => {
    setTasks([]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center", color: "blue" }}>Todolist</h1>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task title"
            className="custom-input"
          />
          <button
            className="btnAdd"
            style={{ marginLeft: 10 }}
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        
        <ul style={{ display: "grid", justifyItems: "center", marginTop: 20 }}>
          {tasks.map((task) => (
            <li key={task.id}>
              {editMode === task.id ? (
                <>
                  <input
                    className="custom-input"
                    type="text"
                    value={task.title}
                    onChange={(e) =>
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id ? { ...t, title: e.target.value } : t
                        )
                      )
                    }
                  />
                  <button
                    style={{ marginLeft: 15 }}
                    className="btnAdd"
                    onClick={() => setEditMode(null)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span style={{ marginLeft: 15, marginTop: 10 }}>
                    {task.title}
                  </span>
                  <button
                    className="btnEdit"
                    style={{ marginLeft: 15, marginTop: 10 }}
                    onClick={() => setEditMode(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btnDelete"
                    style={{ marginLeft: 15, marginTop: 10 }}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <div style={{ display:'flex', justifyContent:'center', marginTop: 30, marginLeft:400 }}>
        <button
            
            className="btnDelete"
            onClick={() => deleteAllTasks()}
        >
            Clear all
        </button>
        </div>
      </header>
    </div>
  );
}

export default Todolist;
