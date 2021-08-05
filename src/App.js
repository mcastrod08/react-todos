import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <TodoList/>
      <Footer  text="© Copyright 2020 María Castro. All rights reserved."/>
    </div>
  );
}

export default App;