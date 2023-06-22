import data from './data.json';
import Rate from './components/Rate';

import './App.css';

function App() {
  return (
    <div className="App">
      {data.map((element, index) => {
        return (
          <Rate key={index} {...element}></Rate>
        );
      })}
    </div>
  );
}

export default App;
