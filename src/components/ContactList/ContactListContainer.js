import { connect } from 'react-redux';
import ContactList from './ContactList';
import { deleteContact } from '../../redux/contacts/contactsActions';

const mapStateToProps = store => ({
  contacts: store.contacts,
  filter: store.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
