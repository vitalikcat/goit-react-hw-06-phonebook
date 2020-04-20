import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Notification from '../Notification/Notification';
import slideHeader from '../../transitions/slideHeader.module.css';
import popFilter from '../../transitions/popFilter.module.css';
import slideNotification from '../../transitions/slideNotification.module.css';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    mounted: false,
    contactExist: false,
  };

  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem('contacts');

  //   if (persistedContacts) {
  //     const contacts = JSON.parse(persistedContacts);

  //     this.setState({ contacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  handleFilterChange = event => {
    const { value } = event.target;
    const { updateFilterAction } = this.props;

    updateFilterAction(value);
  };

  // addContact = contact => {
  //   const { name } = contact;
  //   const { contacts } = this.state;

  //   const matchedName = contacts.some(contacts => contacts.name === name);

  //   if (matchedName) {
  //     this.setState({ contactExist: true }, () =>
  //       setTimeout(() => this.setState({ contactExist: false }), 3000),
  //     );
  //   } else {
  //     const contactToAdd = {
  //       id: shortid.generate(),
  //       ...contact,
  //     };

  //     this.setState(state => ({
  //       contacts: [...state.contacts, contactToAdd],
  //     }));
  //   }
  // };

  // deleteContact = id => {
  //   this.setState(state => ({
  //     contacts: state.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  render() {
    const { mounted, contactExist } = this.state;
    const {
      contacts,
      deleteContactAction,
      saveContactAction,
      filter,
    } = this.props;
    console.log(contacts);
    // const filteredContacts = contacts.filter(item =>
    //   item.name.toLowerCase().includes(filter.toLowerCase()),
    // );

    return (
      <div>
        {/* <CSSTransition
          in={contactExist}
          timeout={250}
          classNames={slideNotification}
          unmountOnExit
        >
          <Notification />
        </CSSTransition> */}
        <CSSTransition
          in={mounted}
          timeout={500}
          classNames={slideHeader}
          unmountOnExit
        >
          <h1 className={styles.H1}>Phonebook</h1>
        </CSSTransition>
        <ContactForm onSaveContact={saveContactAction} />
        <CSSTransition
          in={contacts.length >= 2}
          timeout={250}
          classNames={popFilter}
          unmountOnExit
        >
          <Filter onChangeFilter={this.handleFilterChange} filter={filter} />
        </CSSTransition>

        {!!contacts.length && (
          <ContactList items={contacts} onDelete={deleteContactAction} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
};
