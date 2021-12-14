import React from 'react';

//--------------------------Component Import----------------/
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status'
import Confirm from './Confirm'

//--------------Style Elements--------------/
import 'components/Appointment/styles.scss';

//-----------------------Index from Appointment------/
export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVE = 'SAVE';
  const DELETE = 'DELETE';
  const CONFIRM = 'CONFIRM';
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  function save(name, interviewer) {
    transition(SAVE);
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview).then(() => transition(SHOW))
  }

  function del() {
    transition(DELETE);
    cancelInterview(id).then(() => transition(EMPTY));
  }


  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (<Show student={interview.student} interviewer={interview.interviewer} onDelete={() => transition(CONFIRM)} />)}
      {mode === CREATE && (<Form onCancel={() => back()} interviewers={interviewers} onSave={save} />)}
      {mode === SAVE && (<Status message='Saving' />)}
      {mode === DELETE && (<Status message='Deleting' />)}
      {mode === CONFIRM && (<Confirm onCancel={() => transition(SHOW)} onConfirm={del} />)}
    </article>
  )
}

