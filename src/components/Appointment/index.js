import React, { Fragment } from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';



import 'components/Appointment/styles.scss';

export default function Appointment(props) {
  const { time, interview } = props;
  const text = (time) => {
    if (time) {
      return `Appointment at ${time}`
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