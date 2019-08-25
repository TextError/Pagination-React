import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts_posts } from '../../../redux/selectors/posts';

import Post from '../post/Post';

const Posts = ({ list_of_posts }) => {
  return (
    <div className='posts'>
      {list_of_posts.map(({ id, title, body }) => <Post key={id} title={title} body={body} />)}
    </div>
  )
};

Posts.propTypes = {
  list_of_posts: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  list_of_posts: select_posts_posts
});

export default connect(mapStateToProps, null)(Posts)
