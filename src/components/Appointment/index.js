import React from 'react';

//--------------------------Component Import----------------/
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status'

//--------------Style Elements--------------/
import 'components/Appointment/styles.scss';

//-----------------------Index from Appointment------/
export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview } = props;
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVE = 'SAVE';
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  function save(name, interviewer) {
    transition(SAVE);
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview).then(() => transition(SHOW))

  }


  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (<Show student={interview.student} interviewer={interview.interviewer} />)}
      {mode === CREATE && (<Form onCancel={() => back()} interviewers={interviewers} onSave={save} />)}
      {mode === SAVE && (<Status />)}
    </article>
  )
}

