import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';


function Form(props) {

  const { interviewers, onSave, onCancel } = props;
  const [student, setStudent] = useState(props.student || '')
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [error, setError] = useState("");

  const reset = function() {
    setStudent('');
    setInterviewer('');
    setError('');
  }

  const cancel = function() {
    reset();
    onCancel();
  }

  function validate() {
    if (student === "") {
      setError('Student name cannot be blank');
      return;
    }
    if (!interviewer) {
      setError('Interviewer name cannot be blank if you want to save');
      return;
    }
    setError('');
    onSave(student, interviewer);
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
            data-testid="student-name-input"
          />
        </form>
        <section className='appointment__validation'>{error}</section>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main >
  );
}

export default Form;