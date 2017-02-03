import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GRButton from '../../components/gr/GRButton';
import * as GRActions from '../../actions/gr/GRActions';

function mapStateToProps(state) {
  return {
	GenR: state.GenReceivers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GRActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GRButton);
