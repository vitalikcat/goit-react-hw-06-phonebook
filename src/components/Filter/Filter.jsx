import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Filter/Filter.module.css';
import popFilter from '../../transitions/popFilter.module.css';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    updateFilter: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  handleInputChange = event => {
    const { value } = event.target;
    const { updateFilter } = this.props;

    updateFilter(value);
  };

  render() {
    const { contacts } = this.props;

    return (
      <CSSTransition
        in={contacts.length >= 2}
        timeout={250}
        classNames={popFilter}
        unmountOnExit
      >
        <form className={styles.Form}>
          <label className={styles.Label}>Find contacts by name</label>
          <input
            type="text"
            name="filter"
            onChange={this.handleInputChange}
            className={styles.Input}
          />
        </form>
      </CSSTransition>
    );
  }
}
