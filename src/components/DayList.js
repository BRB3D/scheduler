import React from 'react';

import DayListItem from './DayListItem';

export default function dayList(props) {
  const { days, day, setDay } = props

  const dayItems = days.map((days) => <DayListItem selected={day === days.name ? true : false} setDay={setDay} key={days.id} name={days.name} spots={days.spots} />);
  return (
    <ul>
      {dayItems}
    </ul>
  )
}