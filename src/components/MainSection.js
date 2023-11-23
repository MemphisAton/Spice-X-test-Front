import React, { useState, useEffect } from 'react';
import axios from '../axios-api';
import Card from './Card';
import './MainSection.css';

const MainSection = () => {
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const response = await axios.get('advantages/');
        setAdvantages(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных преимуществ:', error);
      }
    };
    fetchAdvantages();
  }, []);

  return (
    <main className="main-section">
      <div className="content">
        <button className="start-journey-button">
          Начать путешествие
        </button>
      </div>
      <div className="cards-container">
        {advantages.map(advantage => (
          <Card
            key={advantage.id}
            link={advantage.link}
            title={advantage.title}
            subtitle={advantage.subtitle}
            content={advantage.content}
          />
        ))}
      </div>
    </main>
  );
};

export default MainSection;