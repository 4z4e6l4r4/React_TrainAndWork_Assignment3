// src/actions/courseActions.js
export const fetchCourses = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_COURSES_REQUEST' });
      return fetch('/api/courses')
        .then(response => response.json())
        .then(json => dispatch({ type: 'FETCH_COURSES_SUCCESS', payload: json }))
        .catch(error => dispatch({ type: 'FETCH_COURSES_FAILURE', error: error.message }));
    };
  };
  