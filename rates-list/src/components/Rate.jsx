import style from './Rate.module.css';

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
    <section className={`${style.Rate} ${selectedStyle}`}>
      <h2 className={style.title} style={backgroundDark}>
        Безлимитный {props.price}
      </h2>
      <div className={style.price} style={backgroundLight}>
        <div className={style.price__container}>
          <div className={style.currency}>руб</div> <span>{props.price}</span>/мес
        </div>
      </div>
      <div className={style.speed}>до {props.speed} МБит/сек</div>
      <div className={style.defoult_text}>
        Oбъем включенного <br />
        трафика не ограничен
      </div>
    </section>
  );
}

export default Rate;
