const defaultState = {
  employees: [
    {
      ID: "203483924",
      active: true,
      name: "Yura Dukhno",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
    },
    {
      ID: "203483924",
      active: true,
      name: "Yura Dukhno",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
    },
    {
      ID: "203483924",
      active: true,
      name: "Yura Dukhno",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
    },
    {
      ID: "203483924",
      active: true,
      name: "Yura Dukhno",
      extraHours: "4:00",
      manualHours: "4:00",
      hours: "155:00",
    },
  ],
};

export const employeesReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
