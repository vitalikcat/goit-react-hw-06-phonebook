import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux'; // Импортирую createStore из redux
// import { devToolsEnhancer } from 'redux-devtools-extension'; // Импортирую для плагина в Браузере
import contactsReducer from './contacts/contactsReducer'; // Импортирую функцию reducer которая возвращает обьект хранилища

const store = configureStore({
  reducer: contactsReducer,
});

// without Redux toolkit
// const store = createStore(appReducer, devToolsEnhancer()); // Создаю хранилище, передаю appReducer, devToolsEnchancer

export default store; // експортирую хранилище чтобы передать компоненту
