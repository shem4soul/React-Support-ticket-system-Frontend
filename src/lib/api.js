import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
})

export async function submitTicket(payload) {
  const { data } = await api.post('/tickets', payload)
  return data
}

export default api
