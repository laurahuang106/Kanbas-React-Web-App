import Classes from "./Classes";
import Javascript from "./Javascript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoItem";

function Assignment3() {
  return (
    <div className="container">
      <h2>Assignment 3</h2>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <Javascript />

      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>

      <Add a={3} b={4} />
      <TodoList />
    </div>
  );
}

export default Assignment3;
