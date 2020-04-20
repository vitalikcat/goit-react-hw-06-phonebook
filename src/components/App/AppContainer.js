import { connect } from 'react-redux';
import {
  saveContactAction,
  deleteContactAction,
  updateFilterAction,
} from '../../redux/actions';
import App from '../App/App';

const mapStateToProps = store => ({
  contacts: store.contacts,
  filter: store.filter,
});

const mapDispatchToProps = dispatch => ({
  saveContactAction: contact => dispatch(saveContactAction(contact)),
  deleteContactAction: id => dispatch(deleteContactAction(id)),
  updateFilterAction: query => dispatch(updateFilterAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
