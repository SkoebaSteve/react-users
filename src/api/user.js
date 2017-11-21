import API from './API'

const GetUsers = () => API.get('users').then(result => result.json())
const GetUser = id => API.get(`users/${id}`).then(result => result.json())

export { GetUsers, GetUser }
