// const TodoList = () => {
//   return `
//         <ul>
//             <li>Buy milk</li>
//             <li>Pickup the kids</li>
//             <li>Walk the dog</li>
//         </ul>
//     `;
// };
// export default TodoList;

// import TodoItem from "./TodoItem.js";
// const TodoList = () => {
//     return(`
//         <ul>
//             ${TodoItem('Buy milk2')}
//             ${TodoItem('Pickup the kids2')}
//             ${TodoItem('Walk the dog2')}
//         </ul>
//     `);
// }
// export default TodoList;

import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
  return `
        <ul>
            ${todos
              .map((todo) => {
                return TodoItem(todo);
              })
              .join("")}
        </ul>
    `;
};
export default TodoList;
