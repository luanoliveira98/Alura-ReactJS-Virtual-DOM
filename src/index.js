import React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <section className="App">
      <h1>Counter</h1>
      <div>
        <div>0</div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </section>
  );
}

render(<App/>, document.querySelector('#root'));
