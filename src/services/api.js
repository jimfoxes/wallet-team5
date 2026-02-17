import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/transactions'

// Получить список транзакций с опциональной сортировкой и фильтрацией
export async function fetchTransactions({ token, sortBy, filterBy }) {
    try {
        const params = {}
        if (sortBy) params.sortBy = sortBy
        if (filterBy) params.filterBy = filterBy

        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params,
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка загрузки транзакций'
        )
    }
}

// Добавить новую транзакцию
export async function addTransaction({ token, transaction }) {
    try {
        const response = await axios.post(API_URL, transaction, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка добавления транзакции'
        )
    }
}

// Удалить транзакцию по ID
export async function deleteTransaction({ token, id }) {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка удаления транзакции'
        )
    }
}

//  Обновить транзакцию по ID
export async function updateTransaction({ token, id, updates }) {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, updates, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка обновления транзакции'
        )
    }
}

//  Получить транзакции за период
export async function getTransactionsByPeriod({ token, start, end }) {
    try {
        const response = await axios.post(
            `${API_URL}/period`,
            { start, end },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error ||
                'Ошибка получения транзакций за период'
        )
    }
}