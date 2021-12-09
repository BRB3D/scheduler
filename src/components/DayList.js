import React from 'react';

import DayListItem from './DayListItem';

export default function dayList(props) {
  const { days, value, onChange } = props

  const dayItems = days.map((days) => <DayListItem selected={value === days.name} setDay={onChange} key={days.id} name={days.name} spots={days.spots} />);
  return (
    <ul>
      {dayItems}
    </ul>
  )
}