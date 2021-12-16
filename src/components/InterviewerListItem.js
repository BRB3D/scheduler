import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';

function InterviewListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;

  const interviewersClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected
  });

  return (
    <li onClick={setInterviewer} className={interviewersClass} >
      <img
        className='interviewers__item-image'
        src={avatar}
        alt={name}
      />
      {selected && <>{name}</>}
    </li>
  );
}

export default InterviewListItem;