import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban/'

// Получить все задачи
export async function fetchTasks({ token }) {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        return response.data.tasks
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message)
    }
}

// Добавить задачу
export async function addTask({ token, task }) {
    try {
        const response = await axios.post(API_URL, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message)
    }
}
