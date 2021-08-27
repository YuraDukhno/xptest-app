import { REORDER_EMPLOYEES } from './actions/types';

const defaultState = {
  employees: [
    {
      id: "12345",
      active: true,
      name: "Yura Dukhno",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
      totalHours: '159:00'
    },
    {
      id: "25632",
      active: true,
      name: "Alex Doe",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
      totalHours: '159:00'
    },
    {
      id: "4353456",
      active: true,
      name: "Sasha Vert",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
      totalHours: '159:00'
    },
    {
      id: "268784",
      active: false,
      name: "Yarik Lol",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
      totalHours: '159:00'
    },
  ],
};

export const employeesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REORDER_EMPLOYEES: {
      const updatedEmployees = [...state.employees];
      const [removed] = updatedEmployees.splice(action.payload.source.index, 1);
      updatedEmployees.splice(action.payload.destination.index, 0, removed);
      return {
        ...state,
        employees: updatedEmployees
      }
    }
    default:
      return state;
  }
};
