import React from 'react';

//--------------------------Component Import----------------/
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status'
import Confirm from './Confirm'
import Error from './Error'
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
  const EDIT = 'EDIT';
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  function save(name, interviewer) {
    transition(SAVE, true);
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }

  function del() {
    transition(DELETE, true);
    cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  }


  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (<Show student={interview.student} interviewer={interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} />)}
      {mode === CREATE && (<Form onCancel={() => back()} interviewers={interviewers} onSave={save} />)}
      {mode === SAVE && (<Status message='Saving' />)}
      {mode === DELETE && (<Status message='Deleting' />)}
      {mode === CONFIRM && (<Confirm onCancel={() => transition(SHOW)} onConfirm={del} />)}
      {mode === EDIT && (<Form onCancel={() => transition(SHOW)} interviewer={interview.interviewer.id} student={interview.student} interviewers={interviewers} onSave={save} />)}
      {mode === ERROR_SAVE && <Error onClose={() => transition(EMPTY)} />}
      {mode === ERROR_DELETE && <Error onClose={() => transition(SHOW)} />}
    </article>
  )
}

