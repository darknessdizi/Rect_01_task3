import { months, dayWeek, findFirstDayMonth } from './const';

export const Calendar = (props) => {
  // принимаем props для универсальности компонента
  // у него сейчас один ключ date
  const { date } = props;

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  let numberDays = months[month].count;
  if (months[month].name === 'Ферваль') {
    // Корректировка на високосный год
    const february = new Date(year, 2, 0);
    if (february.getDate() === 29) {
      numberDays = 29;
    }
  }
  const currentNumber = date.getDate();
  const day = date.getDay();

  const firstDayMonth = findFirstDayMonth(month - 1, year); // вычислили первый день месяца
  let oldCount = dayWeek[firstDayMonth].sequenceNumber - 1; // счетчик предыдущих дней

  const result = [];
  let components = [];
  let week = [<tr>{ components }</tr>];
  let count = 0;

  for (let i = 1; i <= numberDays; i += 1) {
    count += 1;

    if (oldCount > 0) {
      if (i <= oldCount) {
        // Добавление дней предыдущего месяца
        let previousNumberDays = months[month - 1].count;
        if (months[month - 1].name === 'Ферваль') {
          // Корректировка на високосный год
          const february = new Date(year, 2, 0);
          if (february.getDate() === 29) {
            previousNumberDays = 29;
          }
        }

        const oldNumber = previousNumberDays - oldCount + i;
        components.push(<td className="ui-datepicker-other-month">{oldNumber}</td>);
        continue;
      } else {
        oldCount = 0;
        i = 1;
      }
    }

    if (i === currentNumber) {
      // Отрисовываем текущий день
      components.push(<td className="ui-datepicker-today">{i}</td>);
    } else {
      // Добавление простых дней в поле календаря
      components.push(<td>{i}</td>);
    }

    if (count === 7) {
      // Сохраняем заполненную неделю и начинаем новую
      result.push(week);
      components = [];
      week = [<tr>{ components }</tr>];
      count = 0;
    }

    if ((i === numberDays) && (count !== 0)) {
      // Последняя неделя месяца
      const length = 7 - components.length;
      for (let y = 1; y <= length; y += 1) {
        // Добавляем дни следующего месяца
        components.push(<td className="ui-datepicker-other-month">{y}</td>);
      }
      result.push(week);
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayWeek[day].name}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentNumber}</div>
          <div className="ui-datepicker-material-month">{months[month].secondName}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[month].name}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
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
        <tbody>

        { result }

        </tbody>
      </table>
    </div>
  );
}
