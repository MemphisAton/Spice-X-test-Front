import React, { useState, useEffect } from 'react';
import axios from '../axios-api';

const AdvantagesComponent = () => {
    const [advantages, setAdvantages] = useState([]); // Состояние для хранения данных

    useEffect(() => {
        // Функция для получения данных о преимуществах
        const fetchAdvantages = async () => {
            try {
                const response = await axios.get('advantages/');
                setAdvantages(response.data); // Обновляем состояние данными из ответа
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchAdvantages(); // Вызываем функцию при монтировании компонента
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся один раз при монтировании
    // Рендерим данные в JS
    return null;
};

export default AdvantagesComponent;
