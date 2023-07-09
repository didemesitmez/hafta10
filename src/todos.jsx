import { memo } from "react"

const Todos = ({ todos, todoEkle }) => {
  console.log("child render")

  return (
    <>
      <h2>Yapılacak İşler</h2>

      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}

      <button onClick={todoEkle}>Add Todo</button>
    </>
  );
};

export default memo(Todos)