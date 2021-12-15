import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";
import { exportAllDeclaration } from "@babel/types";

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1, 2]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: []
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};


// key={appointment.id}
// id={appointment.id}
// time={appointment.time}
// interview={interview}
// interviewers={interviewers}
// bookInterview={bookInterview}
// cancelInterview={cancelInterview}

afterEach(cleanup);
describe('Appointment tests', () => {

  it('doesnt call the function', () => {
    const fn = jest.fn();
    expect(fn).toHaveBeenCalledTimes(0);
  })

  it('calls the function', () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
  })

  it('Calls the function with specific arguments', () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
  })

  it('uses the mock implementation', () => {
    const fn = jest.fn((a, b) => 42);
    fn(1, 2);
    expect(fn).toHaveReturnedWith(42);
  })

  it('renders wihtout crashing', () => {
    render(<Appointment />)
  });
})