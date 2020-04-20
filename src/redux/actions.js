import { Types } from '../redux/actionTypes';

export const saveContactAction = contact => ({
  type: Types.SAVECONTACT,
  payload: {
    contact,
  },
});

export const deleteContactAction = id => ({
  type: Types.DELETECONTACT,
  payload: {
    id,
  },
});

export const updateFilterAction = query => ({
  type: Types.FILTERCONTACTS,
  payload: {
    query,
  },
});
