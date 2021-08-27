import { REORDER_EMPLOYEES } from './types';

export const reoderEmployees = result => {
	return {
		payload: result,
		type: REORDER_EMPLOYEES,
	};
};
