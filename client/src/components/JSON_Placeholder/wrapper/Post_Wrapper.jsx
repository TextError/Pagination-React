import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Posts from '../posts/Posts';
import Spinner from '../../common/spinner/Spinner';

import { select_posts_isLoaded } from '../../../redux/selectors/posts';


const mapStateToProps = createStructuredSelector({
  isLoading: state => !select_posts_isLoaded(state)
});

const PostWrapper = compose(connect(mapStateToProps), Spinner )(Posts);

export default PostWrapper;