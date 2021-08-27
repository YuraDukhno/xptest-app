import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { reoderEmployees } from '../store/actions/employees';
import Table from '../components/Table';

const tableConfig = {
	columns: [
		{ header: 'מספר ת.ז', accessor: 'id', },
		{ header: 'שם עובד', accessor: 'name', },
		{ header: 'שעות חריגות', accessor: 'extraHours', },
		{ header: 'שעות ידניות', accessor: 'manualHours' },
		{ header: 'שעות', accessor: 'hours' },
    { header: 'סך הכל שעות', accessor: 'totalHours'}
	],
};

const Employees = () => {
	const dispatch = useDispatch();
  const employees = useSelector( state => state.employees.employees);
  return (
    <Table
      config={tableConfig}
      data={employees}
      onDragEnd={result => dispatch(reoderEmployees(result))}
      responsive
    />
  )
}

export default Employees;