import React from 'react';
import TodoSlides from './component/todoSlide';
import "./style/main.css";
const App : React.FC =() => {
  
  return (
    <div className="App">
      <div className="container">
        <TodoSlides/>
      </div>
    
    </div>
  );
}

export default App;
