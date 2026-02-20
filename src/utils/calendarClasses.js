import { parseDate, isDateInRange, isSameDate } from './dateUtils'

export const getDateClasses = (day, monthIndex, year, periods) => {
    const { from, to, tempStart, tempEnd } = periods
    const currentDate = { day, month: monthIndex + 1, year }

    const selectedFrom = from ? parseDate(from) : null
    const selectedTo = to ? parseDate(to) : null

    const isInSelectedPeriod =
        selectedFrom && selectedTo
            ? isDateInRange(currentDate, selectedFrom, selectedTo)
            : false

    const isPeriodStart = selectedFrom
        ? isSameDate(currentDate, selectedFrom)
        : false
    const isPeriodEnd = selectedTo ? isSameDate(currentDate, selectedTo) : false

    const isInTempPeriod =
        tempStart && tempEnd
            ? isDateInRange(currentDate, tempStart, tempEnd)
            : false

    const isTempStart = tempStart ? isSameDate(currentDate, tempStart) : false
    const isTempEnd = tempEnd ? isSameDate(currentDate, tempEnd) : false

    return {
        isInSelectedPeriod,
        isPeriodBoundary: isPeriodStart || isPeriodEnd,
        isInTempPeriod,
        isTempBoundary: isTempStart || isTempEnd,
    }
}
