import datepicker from 'js-datepicker'


const options = {
    customDays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнсь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
}
const picker = datepicker('#datepicker', options)