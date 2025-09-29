import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon, children }) => {
  return (
    <div className="card-component">
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      {children && <div className="card-content">{children}</div>}
    </div>
  );
};

export default Card;