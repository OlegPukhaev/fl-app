var Auth = require('./../../node_modules/j-toker/src/j-toker');

Auth.configure({
	apiUrl:"https://floating-atoll-63112.herokuapp.com/api/v1",
	storage:'cookies',
});

export function fetchUserLogin(email, password) {
	return Auth.emailSignIn({
		email: email,
		password: password
	}).then(response => {
		alert("Добро пожаловать"+ response.data.full_name);
	}
	).catch( error => {
		alert("Ошибка логина");
	});
}

export function fetchValidateToken () {
  return Auth.validateToken()
  .then(response => response)
  .catch(error => {
		return error;
	});
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
