import React, { useState } from "react";

type CounterProps = {
  initialValue: number;
  initialAge: number;
};

export default function Counter(props: CounterProps) {
  let [counter, setCounter] = useState<number>(props.initialValue); //generics
  let [age, setAge] = useState<number>(props.initialAge);
  return (
    <div>
      <p>Counter : {counter} </p>
      <button onClick={() => setCounter(++counter)} className="btn btn-primary">
        ++
      </button>
      <hr />
      <p>Age : {age} </p>
      <button onClick={() => setAge(++age)} className="btn btn-primary">
        ++
      </button>
    </div>
  );
}
