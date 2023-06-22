import React, { useContext, useState } from "react";

const CounterContext = React.createContext({});

export function GrandParent() {
  let [count, setCount] = useState(1000);

  function ChangeCount() {
    setCount(++count);
  }

  return (
    <div style={{ border: "2px solid red", margin: "5px" }}>
      <h1>GrandParent (Provider)</h1>
      <CounterContext.Provider value={{ count, ChangeCount }}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
}

export function Parent() {
  return (
    <div style={{ border: "2px solid blue", margin: "5px" }}>
      <h2>Parent</h2>
      <Child />
    </div>
  );
}
export function Child() {
  const ctxObject = useContext<any>(CounterContext);
  return (
    <div style={{ border: "2px solid green", margin: "5px" }}>
      <h3>Child consume : {ctxObject.count}</h3>
      <button onClick={() => ctxObject.ChangeCount()}>++</button>
      <hr />
      <Leaf />
    </div>
  );
}

export function Leaf() {
  return (
    <div style={{ border: "2px solid gray", margin: "5px" }}>
      <CounterContext.Consumer>
        {(value: any) => (
          <>
            <h3>Leaf consumes : {value?.count}</h3>
            <button onClick={() => value.ChangeCount()}>++</button>
          </>
        )}
      </CounterContext.Consumer>
    </div>
  );
}


// import React from "react";
// const CounterContext = React.createContext(0);
// export function GrandParent() {
//   return (
//     <div>
//       <h1>provider</h1>
//       <CounterContext.Provider value={100}>
//         <Parent />
//       </CounterContext.Provider>
//     </div>
//   );
// }

// export function Parent() {
//   return (
//     <div>
//       <h1>Parent</h1>
//       {/* <CounterContext.Consumer>
//          {value=><p>Parent consumes:{value}</p>}
//          </CounterContext.Consumer> */}
//       <Child />
//     </div>
//   );
// }

// export function Child() {
//   return (
//     <div>
//       <CounterContext.Consumer>
//         {(value) => <p>child consumes:{value}</p>}
//       </CounterContext.Consumer>
//     </div>
//   );
// }