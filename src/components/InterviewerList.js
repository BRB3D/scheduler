import React from 'react';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types';


function InterviewList(props) {
  const { interviewers, onChange, value } = props;

  const interviewerItem = interviewers.map((interviewP) =>
    <InterviewerListItem
      selected={value === interviewP.id}
      key={interviewP.id}
      name={interviewP.name}
      avatar={interviewP.avatar}
      setInterviewer={() => onChange(interviewP.id)}
    />)

  return (
    <section className='interviews'>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className='interviewers__list'>{interviewerItem}</ul>
    </section>
  );
}

InterviewList.propTypes = {
  interviewers: PropTypes.array.isRequired
}

export default InterviewList;