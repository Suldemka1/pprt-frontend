import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
registerLocale("ru", ru)

export const Datepicker = (params) => {

  <style jsx>{`
      .picker {
        margin-top: 50px;
        margin-bottom: 50px;
      }
  `}</style>


  const [startDate, setStartDate] = useState(new Date())

  return <DatePicker
    className='picker'
    selected={startDate}
    dateFormat="P"
    locale="ru"
    onChange={(date) => setStartDate(date)}
  />
}