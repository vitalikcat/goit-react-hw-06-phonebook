import * as ActionType from './contactsType'; // Импортирую Обьект с типами экшинов
import { createReducer } from '@reduxjs/toolkit';

/**
 * Создаю обьект state который будет по умолчанию
 */
const defaultState = {
  contacts: [],
  filter: '',
};

const contactReducer = createReducer(defaultState, {
  [ActionType.SAVECONTACT]: (state, action) => {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  },
  [ActionType.DELETECONTACT]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== action.payload),
  }),
  [ActionType.UPDATEFILTER]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export default contactReducer;
// const appSlice = createSlice({
//   name: 'app',
//   initialState: defaultState,
//   reducers: {
//     saveContact(state, { type, payload }) {
//       if (
//         state.contacts.some(
//           contact =>
//             contact.name.toLowerCase() === payload.contact.name.toLowerCase(),
//         )
//       ) {
//         return { ...state, contactExist: true };
//       }
//       return {
//         ...state,
//         contactExist: false,
//         contacts: [...state.contacts, payload.contact],
//       };
//     },
//     deleteContact(state, { type, payload }) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload.id),
//       };
//     },
//     updateFilter(state, { type, payload }) {
//       return {
//         ...state,
//         filter: payload.filter,
//       };
//     },
//   },
// });

// export default appSlice;
// Without Redux toolkit
// /**
//  * Создаю редьюсер, передаю обькт defaultState, и action который деструктуризирую
//  */
// const appReducer = (state = defaultState, { type, payload }) => {
//   /**
//    * Значение выражения - строка или число, которое сравнивается со всеми значениями case.
//    * Если тип SAVECONTACT, тогда выполнится код дальше.
//    * Если совпадения не произошло, управление передается default
//    * Редьюсер возвращает новый обьект состояния
//    */
//   switch (type) {
//     case ActionType.SAVECONTACT:
//       if (
//         state.contacts.some(
//           contact =>
//             contact.name.toLowerCase() === payload.contact.name.toLowerCase(),
//         )
//       ) {
//         return { ...state, contactExist: true };
//       }
//       return {
//         ...state,
//         contactExist: false,
//         contacts: [...state.contacts, payload.contact],
//       };

//     case ActionType.DELETECONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload.id),
//       };

//     case ActionType.UPDATEFILTER:
//       return {
//         ...state,
//         filter: payload.filter,
//       };

//     default:
//       return state;
//   }
// };

// export default appReducer;
