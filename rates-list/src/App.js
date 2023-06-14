import data from './data.json';
import Rate from './components/Rate';

import './App.css';

function App() {
  return (
    <div className="App">
      {data.map((element, index) => {
        return (
          <Rate key={index} price={element.price} speed={element.speed}
            backgroundDark={element.backgroundDark} backgroundLight={element.backgroundLight} 
            selected = {element.selected}></Rate>
        );
      })}
    </div>
  );
}

export default App;
