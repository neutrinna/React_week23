import './Rate.css';

function Rate(props) {
  const backgroundDark = {
    backgroundColor: props.backgroundDark,
  };
  const backgroundLight = {
    backgroundColor: props.backgroundLight,
  };
  const selected = props.selected;
  let selectedStyle;
  selected && (selectedStyle = 'selected');
  

  return (
    <section className={`Rate ${selectedStyle}`}>
      <h2 className="title" style={backgroundDark}>
        Безлимитный {props.price}
      </h2>
      <div className="price" style={backgroundLight}>
        <div className="price__container">
          <div className="currency">руб</div> <span>{props.price}</span>/мес
        </div>
      </div>
      <div className="speed">до {props.speed} МБит/сек</div>
      <div className="defoult-text">
        Oбъем включенного <br />
        трафика не ограничен
      </div>
    </section>
  );
}

export default Rate;
