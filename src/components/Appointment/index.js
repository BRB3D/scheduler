import React from 'react';

//--------------------------Component Import
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

//--------------Style Elements--------------/
import 'components/Appointment/styles.scss';

//-----------------------Index from Appointment------/
export default function Appointment(props) {
  const { time, interview } = props;
  const text = (time) => {
    if (time) {
      return `${time}`
    }
    return 'No Appointments';
  }

  return (
    <article className="appointment">
      <>{text(time)}</>
      <Header />
      {interview ? <Show interviewer={interview.interviewer} student={interview.student} /> : <Empty />}
    </article>

  )
}