import React from 'react';
import './index.css';

import BookList from "./components/BookList";

function App() {
  return (
    <div className="main">
      <h1>Manda's Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
