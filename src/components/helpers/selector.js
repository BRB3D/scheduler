

const getAppointmentsForDay = function(state, day) {
  const { days, appointments } = state;
  const selectedDay = (function() {
    let appointmentForDayArray = [];
    for (let dayObj of days) {
      if (dayObj.name === day) {
        appointmentForDayArray = [...dayObj.appointments];
      }
    }
    return appointmentForDayArray;
  }());

  const appointmentsForTheDay = (function() {
    if (selectedDay.length === 0) { return [] };
    let result = []
    for (let appointment of selectedDay) {
      if (appointments[appointment]) {
        result.push(appointments[appointment]);
      }
    }
    return result;
  }());
  return appointmentsForTheDay;
}



const getInterview = function(state, interview) {
  const { interviewers } = state;
  if (!interview) {
    return null;
  }
  const result = { ...interview, interviewer: interviewers[interview.interviewer] }

  return result;

}

const getInterviewersForDay = function(state, day) {
  const { days, interviewers } = state;
  const selectedDay = (function() {
    let interviewersForDayArray = [];
    for (let dayObj of days) {
      if (dayObj.name === day) {
        interviewersForDayArray = [...dayObj.interviewers];
      }
    }
    return interviewersForDayArray;
  }());

  const interviewesForTheDay = (function() {
    if (selectedDay.length === 0) { return [] };
    let result = []
    for (let interview of selectedDay) {
      if (interviewers[interview]) {
        result.push(interviewers[interview]);
      }
    }
    return result;
  }());

  return interviewesForTheDay;
}


export { getAppointmentsForDay, getInterview, getInterviewersForDay }