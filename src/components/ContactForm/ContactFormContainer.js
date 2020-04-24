import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { saveContact } from '../../redux/contacts/contactsActions';

const mapStateToProps = store => ({
  contacts: store.contacts,
});

const mapDispatchToProps = dispatch => ({
  saveContact: contact => dispatch(saveContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
