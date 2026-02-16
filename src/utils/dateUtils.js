// Формат: DD.MM.YYYY
export const formatDate = (day, monthNum, year) => {
  const dayStr = String(day).padStart(2, '0')
  const monthStr = String(monthNum).padStart(2, '0')
  return `${dayStr}.${monthStr}.${year}`
}

// Получить количество дней в месяце
export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate()
}

// Получить день недели для первого числа месяца (1 - понедельник, 7 - воскресенье)
export const getFirstDayOfMonth = (month, year) => {
  const date = new Date(year, month, 1)
  return date.getDay() === 0 ? 7 : date.getDay()
}

// Генерация дней для месяца
export const generateMonthDays = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year)
  const firstDay = getFirstDayOfMonth(month, year)
  const days = []

  // Пустые ячейки для дней предыдущего месяца
  const prevMonthDays = firstDay - 1
  for (let i = 0; i < prevMonthDays; i++) {
    days.push({
      number: '',
      isEmpty: true,
    })
  }

  // Дни текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      number: i,
      isEmpty: false,
    })
  }

  // Пустые ячейки для дней следующего месяца
  const totalDays = days.length
  const remainingCells = (7 - (totalDays % 7)) % 7

  for (let i = 0; i < remainingCells; i++) {
    days.push({
      number: '',
      isEmpty: true,
    })
  }

  return days
}

// Преобразовать строку даты в объект
export const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('.').map(Number)
  return { day, month, year }
}

// Сравнить две даты
export const isSameDate = (date1, date2) => {
  return (
    date1.day === date2.day &&
    date1.month === date2.month &&
    date1.year === date2.year
  )
}

// Проверить, находится ли дата между двумя датами
export const isDateInRange = (date, start, end) => {
  if (!start || !end) return false
  const dateObj = new Date(date.year, date.month - 1, date.day)
  const startObj = new Date(start.year, start.month - 1, start.day)
  const endObj = new Date(end.year, end.month - 1, end.day)

  return dateObj >= startObj && dateObj <= endObj
}

// Проверить, является ли дата сегодняшней
export const isToday = (dateString) => {
  const today = new Date()
  const { day, month, year } = parseDate(dateString)
  const date = new Date(year, month - 1, day)
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}