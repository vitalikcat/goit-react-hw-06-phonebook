import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from '../Logo/Logo';
import ContactFormContainer from '../ContactForm/ContactFormContainer';
import ContactListContainer from '../ContactList/ContactListContainer';
import FilterContainer from '../Filter/FilterContainer';
import PropTypes from 'prop-types';
import slideLogo from '../../transitions/slideLogo.module.css';

export default class App extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    saveContact: PropTypes.func.isRequired,
  };

  state = {
    mounted: false,
  };

  componentDidMount() {
    const { saveContact } = this.props;
    const persistedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (persistedContacts) {
      persistedContacts.map(contact => saveContact(contact));
    }

    this.setState({ mounted: true });
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;

    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { mounted } = this.state;
    const { contacts } = this.props;

    return (
      <div>
        <CSSTransition
          in={mounted}
          timeout={500}
          classNames={slideLogo}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>

        <ContactFormContainer />
        {contacts.length >= 2 && <FilterContainer />}
        {!!contacts.length && <ContactListContainer />}
      </div>
    );
  }
}
