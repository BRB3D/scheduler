import React from 'react';


export default function Header(props) {
  const { time } = props;
  const text = (time) => {
    if (time) {
      return `${time}`
    }
    return 'No Appointments';
  }

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{text(time)}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}