export function getToken(){
    var token = localStorage.getItem('authHeaders');
    if (token) return token
        else return false;
}