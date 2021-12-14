import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';


export default function Form(props) {
  const { interviewers, onSave, onCancel } = props;
  const [student, setStudent] = useState(props.student || '')
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const reset = function() {
    setStudent('');
    setInterviewer('');
  }
  const cancel = function() {
    onCancel();
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          {!props.student && <Button danger onClick={() => {
            reset();
            cancel()
            return <Form />
          }}>Cancel</Button>}
          {props.student && <Button danger onClick={onCancel}>Cancel</Button>}
          <Button confirm disabled={!student || !interviewer} onClick={() => onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main >
  );

}