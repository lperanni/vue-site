import store from '../store';
import dataBase from '../db';


const checkCredentials = (userObject) => {
  const user = dataBase.find(element => ((element.name === userObject.name) ? element : null));

  if (user != null && user.password === userObject.password) {
    store.commit('logIn', { userName: user.name, password: user.password, email: user.email });
  } else {
    alert('Unsuccessful login');
  }
};

export default checkCredentials;
