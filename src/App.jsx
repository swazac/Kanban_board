import React from 'react';
import {} from 'react-beautiful-dnd';
import './App.scss';
import Kanban from './components/kanban/kanban';

function App() {
  return (
    <div style={{padding: '50px'}}>
      <h1 style={{marginBottom: '20px'}}>Kanban Board</h1>
      <Kanban />
    </div>
  );
}

export default App;
