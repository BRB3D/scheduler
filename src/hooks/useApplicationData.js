import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {

    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, [])

  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log(interview)

    return axios.put(`/api/appointments/${id}`, { interview: appointments[id].interview })
      .then(() => setState(prev => ({ ...prev, appointments: appointments })))
  }

  const setDay = day => setState({ ...state, day });

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    console.log(appointments)



    return axios.delete(`/api/appointments/${id}`, { interview: null })
      .then(() => setState(prev => ({ ...prev, appointments: appointments })));
  }

  return { state, setDay, bookInterview, cancelInterview };
}
