import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";



const Labs = () => {
  return (
    <div>
      <h1>Labs!!!</h1>
      <h1>Non React.js Assignments</h1>
      <ul>
        <li>
          <a href="labs/a2/html/index.html">Assignment 2 Labs</a>
        </li>
        <li>
          <a href="labs/a3/css/index.html">Assignment 3 Labs</a>
        </li>
        <li>
          <a href="labs/a4/bootstrap/index.html">Assignment 4 Labs</a>
        </li>
        <li>
          <a href="labs/a5//js/index.html">Assignment 5 Labs</a>
        </li>
      </ul>
      <h1>
        <a href="labs/index.html">Web Dev Challenges</a>
      </h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      <TodoItem />
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </div>
  );
};

export default Labs;
