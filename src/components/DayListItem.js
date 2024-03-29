import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  let dayClass = classNames('day-list__item', {
    'day-list__item--selected ': selected,
    'day-list__item--full': !spots
  });

  const formatSpots = function(spots) {
    if (spots === 0) {
      return 'no spots remaining';
    }
    if (spots === 1) {
      return `${spots} spot remaining`
    }
    return `${spots} spots remaining`
  };

  return (
    <li data-testid='day' className={dayClass} onClick={() => setDay(name)}>
      <h2 className='text--regular'>{name}</h2>
      <h3 className='text--light'>{formatSpots(spots)}</h3>
    </li>
  );
}

export default DayListItem;