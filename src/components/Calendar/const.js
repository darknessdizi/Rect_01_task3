export const months = {
  1: { name: 'Январь', secondName: 'Января', count: 31},
  2: { name: 'Ферваль', secondName: 'Февраля', count: 28},
  3: { name: 'Март', secondName: 'Марта', count: 31},
  4: { name: 'Апрель', secondName: 'Апреля', count: 30},
  5: { name: 'Май', secondName: 'Мая', count: 31},
  6: { name: 'Июнь', secondName: 'Июня', count: 30},
  7: { name: 'Июль', secondName: 'Июля', count: 31},
  8: { name: 'Август', secondName: 'Августа', count: 31},
  9: { name: 'Сентябрь', secondName: 'Сентября', count: 30},
  10: { name: 'Октябрь', secondName: 'Отября', count: 31},
  11: { name: 'Ноябрь', secondName: 'Ноября', count: 30},
  12: { name: 'Декабрь', secondName: 'Декабря', count: 31},
};

export const dayWeek = {
  0: { name: 'Воскресенье', reduction: 'Вс', sequenceNumber: 7 },
  1: { name: 'Понедельник', reduction: 'Пн', sequenceNumber: 1 },
  2: { name: 'Вторник', reduction: 'Вт', sequenceNumber: 2 },
  3: { name: 'Среда', reduction: 'Ср', sequenceNumber: 3 },
  4: { name: 'Четверг', reduction: 'Чт', sequenceNumber: 4 },
  5: { name: 'Пятница', reduction: 'Пт', sequenceNumber: 5 },
  6: { name: 'Суббота', reduction: 'Сб', sequenceNumber: 6 },
};

export function findFirstDayMonth(month, year) {
  // Определяет первый день месяца
  const date = new Date(year, month, 1);
  const firstDay = date.getDay();
  return firstDay;
}
