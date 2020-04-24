import * as ActionType from './contactsType';
import { createAction } from '@reduxjs/toolkit';

export const saveContact = createAction(ActionType.SAVECONTACT);
export const deleteContact = createAction(ActionType.DELETECONTACT);
export const updateFilter = createAction(ActionType.UPDATEFILTER);

// Without Redux toolkit
// export const saveContact = contact => ({
//   type: ActionType.SAVECONTACT,
//   payload: {
//     contact,
//   },
// });

// export const deleteContact = id => ({
//   type: ActionType.DELETECONTACT,
//   payload: {
//     id,
//   },
// });

// export const updateFilter = filter => ({
//   type: ActionType.UPDATEFILTER,
//   payload: {
//     filter,
//   },
// });
