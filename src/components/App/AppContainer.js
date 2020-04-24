import { connect } from 'react-redux';
import App from './App';
import * as actions from '../../redux/contacts/contactsActions';

const mapStateToProps = store => ({
  contacts: store.contacts,
  filter: store.filter,
  contactExist: store.contactExist,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(actions.updateFilter(filter)),
  saveContact: contact => dispatch(actions.saveContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
