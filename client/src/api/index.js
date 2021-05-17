import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const createUser = payload => api.post(`/user`, payload)

const apis = {
    createUser
}

export default apis