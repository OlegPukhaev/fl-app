var Auth = require('./../../node_modules/j-toker/src/j-toker');

Auth.configure({
	apiUrl:"https://floating-atoll-63112.herokuapp.com/api/v1",
	storage:'cookies',
});

export function fetchUserLogin(email, password) {
	return Auth.emailSignIn({
		email: email,
		password: password
	}).then(response => response
	).catch(()=>{
		return 'Incorrect Login please try again';
	});
}

export function fetchValidateToken () {
  return Auth.validateToken()
  .then(response => response)
  .fail(error => {
		return error;
	});
}