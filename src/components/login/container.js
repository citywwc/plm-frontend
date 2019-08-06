import {connect} from 'react-redux';
import { login } from './actions';
import Login from './view';

const mapDispatchToProps  = (dispatch, props) => ({
  login: (formValue) => {
    dispatch(login(formValue, props.history));
  }
});

export default connect(null, mapDispatchToProps)(Login);
