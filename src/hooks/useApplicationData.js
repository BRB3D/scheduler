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

  const updateSpots = function(appointments) {
    const currentDay = state.day;
    const arrayOfAppointments = (function() {
      for (let arr of state.days) {
        if (currentDay === arr.name) {
          return arr;
        }
      }
    }())

    const dayId = arrayOfAppointments.id - 1;
    const filteredArray = arrayOfAppointments.appointments.filter(id => !appointments[id].interview);
    const spots = filteredArray.length;

    const updatedDay = { ...state.days[dayId], spots: spots };

    const updatedWeek = state.days.slice();
    updatedWeek[dayId] = updatedDay;


    return updatedWeek;
  }

  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(appointments);

    return axios.put(`/api/appointments/${id}`, { interview: appointments[id].interview })
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }))
      })
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

    const days = updateSpots(appointments);




    return axios.delete(`/api/appointments/${id}`, { interview: null })
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }))
      })
  }

  return { state, setDay, bookInterview, cancelInterview };
}
