// Kullanıcı kaydı için asenkron aksiyon yaratıcısı
export const registerUser = (userData) => {
    return (dispatch) => {
      dispatch({ type: 'REGISTER_REQUEST' });
      return fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(json => dispatch({ type: 'REGISTER_SUCCESS', payload: json }))
      .catch(error => dispatch({ type: 'REGISTER_FAILURE', error: error.message }));
    };
  };
  
  // Kullanıcı girişi için asenkron aksiyon yaratıcısı
  export const loginUser = (credentials) => {
    return (dispatch) => {
      dispatch({ type: 'LOGIN_REQUEST' });
      return fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      .then(response => response.json())
      .then(json => dispatch({ type: 'LOGIN_SUCCESS', payload: json }))
      .catch(error => dispatch({ type: 'LOGIN_FAILURE', error: error.message }));
    };
  };
  