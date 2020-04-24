import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import slideList from '../../transitions/slideList.module.css';

export default class ContactList extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  render() {
    const { contacts, deleteContact, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <TransitionGroup component="ul" className={styles.Ul}>
        {filteredContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            unmountOnExit
            classNames={slideList}
          >
            <li className={styles.Li}>
              <span>{name}</span>
              <span>{number}</span>
              <button
                className={styles.Button}
                onClick={() => deleteContact(id)}
              >
                &#10006;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
