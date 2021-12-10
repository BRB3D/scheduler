import React from 'react';

//--------------------------Component Import----------------/
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

//--------------Style Elements--------------/
import 'components/Appointment/styles.scss';

//-----------------------Index from Appointment------/
export default function Appointment(props) {
  const { time, interview } = props;
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show interviewer={interview.interviewer} student={interview.student} /> : <Empty />}
    </article>
  )
}