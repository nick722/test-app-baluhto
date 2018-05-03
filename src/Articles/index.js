import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Articles from './Articles';
import * as actions from './reducer/actions'
import reducer from './reducer/articles';

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
export { reducer };
