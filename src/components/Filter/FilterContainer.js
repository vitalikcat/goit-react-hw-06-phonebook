import { connect } from 'react-redux';
import Filter from './Filter';
import { updateFilter } from '../../redux/contacts/contactsActions';

const mapStateToProps = store => ({
  contacts: store.contacts,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
