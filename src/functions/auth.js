import {successMessage, warningMessage} from './function'; 
var Auth = require('./../../node_modules/j-toker/src/j-toker');

Auth.configure({
	apiUrl:"https://floating-atoll-63112.herokuapp.com/api"
	// storage:'cookies',
});

export function fetchUserLogin(email, password) {
	return Auth.emailSignIn({
		email: email,
		password: password
	}).then(response => {
		successMessage(`Добро пожаловать ${response.data.full_name}`);
		return true;
	}).catch( error => {
		warningMessage(`Ошибка логина попробуй еще дружище!`); 
		return false;
	});
}

export function fetchValidateToken () {
  return Auth.validateToken()
  .then(response => response)
  .catch(error => {
		return error;
	});
}

export function fetchSignOut () {
	Auth.signOut();
}

export function fetchUserRegistration (first_name, last_name, email, password) {
	return Auth.emailSignUp({
		first_name: first_name,
		first_name: last_name,
		email: email,
		password: password
	}).then(response => {
		alert("Successfuly");
	}).then()
		.catch(error => {
			alert(`Error Registration + ${error}`);
			return "Ошибка регистрации";
		});
} 
