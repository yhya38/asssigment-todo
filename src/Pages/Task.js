import React, { useEffect, useState } from "react";

function Task() {
  const url = "http://jsonplaceholder.typicode.com/todos";
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, { id: id, title: title }];
    });
    setId("");
    setTitle("");
  };

  const deleteTodo = (uid) => {
    setTasks((prev) => {
      return prev.filter((item) => {
        return uid !== item.id;
      });
    });
  };
  return (
    <div className="task">
      {tasks.map((items) => {
        const { id, title, completed } = items;
        const uid = items.id;
        return (
          <ol key={id}>
            <li>
              <span>{id}</span>
              <h4>{title}</h4>
              <p>{completed}</p>
              <button onClick={() => deleteTodo(uid)}>delete</button>
            </li>
          </ol>
        );
      })}
      <div className="new-todo">
        <form>
          <input
            type="number"
            placeholder="id number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button disabled={!id && !title} className="add" onClick={addTodo}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Task;
