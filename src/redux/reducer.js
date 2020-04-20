import { Types } from './actionTypes';

const defaultState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],
  filter: '',
};

export const reducer = (state = defaultState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case Types.SAVECONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload.contact],
      };

    case Types.DELETECONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== payload.id),
      };

    case Types.FILTERCONTACTS:
      return {
        ...state,
        filter: payload.query,
      };

    default:
      return state;
  }
};
