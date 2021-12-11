

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
  if (!interview) {
    return null;
  }


}

export { getAppointmentsForDay }