import React from 'react';
import './Card.css';

const Card = ({ title, subtitle, content, footer, link }) => {
  return (
    <a href={link} className="card-link" style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="card-header">
          {title && <h2 className="card-title">{title}</h2>}
          {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
        </div>
        <div className="card-content">
          {content}
        </div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </a>
  );
};

export default Card;
