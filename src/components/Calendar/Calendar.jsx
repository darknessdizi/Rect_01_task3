const months = {
  1: ['Январь', 'Января'],
  2: ['Ферваль', 'Февраля'],
  3: ['Март', 'Марта'],
  4: ['Апрель', 'Апреля'],
  5: ['Май', 'Мая'],
  6: ['Июнь', 'Июня'],
  7: ['Июль', 'Июля'],
  8: ['Август', 'Августа'],
  9: ['Сентябрь', 'Сентября'],
  10: ['Октябрь', 'Отября'],
  11: ['Ноябрь', 'Ноября'],
  12: ['Декабрь', 'Декабря'],
};

const dayWeek = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
};

export const Calendar = (props) => {
  // принимаем props для универсальности компонента
  // у него сейчас один ключ date
  const date = props.date;

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const number = date.getDate();
  const day = date.getDay();
  console.log('****', year, months[month][0], number, dayWeek[day]);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayWeek[day]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{number}</div>
          <div className="ui-datepicker-material-month">{months[month][1]}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[month][0]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>


        {/*  */}
        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          {/*  */}
          

        </tbody>
      </table>
    </div>
  );
}
