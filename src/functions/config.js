export function getToken(){
    const returnObj = JSON.parse(localStorage.getItem('authHeaders'));
    if (returnObj) {
        return returnObj;
    }
        else return false;
}