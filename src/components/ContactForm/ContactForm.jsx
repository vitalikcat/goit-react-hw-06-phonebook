import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import slideNotification from '../../transitions/slideNotification.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    saveContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
    contactExist: false,
  };

  handleChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: name === 'number' ? value.replace(/[^\-\d]/g, '') : value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { saveContact, contacts } = this.props;

    const matchedContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (name && number) {
      if (matchedContact) {
        this.setState({ contactExist: true }, () =>
          setTimeout(() => this.setState({ contactExist: false }), 3000),
        );
      } else {
        saveContact({ ...this.state, id: shortid.generate() });
        this.resetState();
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { contactExist } = this.state;

    if (prevState.contactExist !== contactExist) {
      setTimeout(() => this.resetState(), 3000);
    }
  }

  resetState = () => {
    this.setState({
      name: '',
      number: '',
      contactExist: false,
    });
  };

  render() {
    const { name, number, contactExist } = this.state;

    return (
      <div>
        <CSSTransition
          in={contactExist}
          timeout={250}
          classNames={slideNotification}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <label className={styles.Label}>
            Name
            <input
              className={styles.Input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.Label}>
            Number
            <input
              className={styles.Input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.Button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
