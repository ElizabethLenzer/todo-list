import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [List, SetList] = useState([]);
  return (
    <div className="App">
      {List.map((Task, i) => (
        <Task Task={Task} SetList={SetList} Index={i} List={List}/>
      ))}
      <Input List={List} SetList={SetList} />
    </div>
  );
}

export default App;