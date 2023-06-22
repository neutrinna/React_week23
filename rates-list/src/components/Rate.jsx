import React, {useState} from 'react';

import './Rate.css';

function Rate(props) {
  const backgroundDark = {
    backgroundColor: props.backgroundDark,
  };
  const backgroundLight = {
    backgroundColor: props.backgroundLight,
  };
  const [selectedItem, setSelectedItem] = useState('');

  function handleChange(){
    setSelectedItem( selectedItem ? '' :'selected');
  }

  return (
    <section onClick={handleChange} className={`Rate ${selectedItem}`}>
      <h2 className="title" style={backgroundDark}>
        Безлимитный {props.price}
      </h2>
      <div className="price" style={backgroundLight}>
        <div className="price__container">
          <div className="currency">руб</div> <span>{props.price}</span>/мес
        </div>
      </div>
      <div className="speed">до {props.speed} МБит/сек</div>
      <div className="defoult_text">
        Oбъем включенного <br />
        трафика не ограничен
      </div>
    </section>
  );
}

export default Rate;
