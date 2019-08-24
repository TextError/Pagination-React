import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Movie from '../movie/Movie';
import Spinner from '../../common/spinner/Spinner';

import { select_movie_isLoaded } from '../../../redux/selectors/movies';


const mapStateToProps = createStructuredSelector({
  isLoading: state => !select_movie_isLoaded(state)
});

const MovieWrapper = compose(connect(mapStateToProps), Spinner )(Movie);

export default MovieWrapper;