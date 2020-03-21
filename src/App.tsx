import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoList from './components/TodoList';
import './App.scss';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Todo List
        </header>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
