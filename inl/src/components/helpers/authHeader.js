export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));
    
    if (token) {
        return { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
