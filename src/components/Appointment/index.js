import React from 'react';




import 'components/Appointment/styles.scss';

export default function Appointment(props) {
  const { time } = props;
  const text = (time) => {
    if (time) {
      return `Appointment at ${time}`
    }
    return 'No Appointments';
  }

  return (
    <article className="appointment">
      <>{text(time)}</>

    </article>

  )
}