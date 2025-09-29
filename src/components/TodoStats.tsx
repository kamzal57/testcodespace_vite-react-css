import React from 'react';

interface TodoStatsProps {
  total: number;
  active: number;
  completed: number;
  categories: string[];
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  total,
  active,
  completed,
  categories,
}) => {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    {
      label: 'Total Todos',
      value: total,
      icon: '📋',
      color: 'primary',
    },
    {
      label: 'Active',
      value: active,
      icon: '⚡',
      color: 'warning',
    },
    {
      label: 'Completed',
      value: completed,
      icon: '✅',
      color: 'success',
    },
    {
      label: 'Categories',
      value: categories.length,
      icon: '📁',
      color: 'info',
    },
    {
      label: 'Completion',
      value: `${completionRate}%`,
      icon: '📊',
      color: 'primary',
    },
  ];

  return (
    <div className="todo-stats">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-card animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="stat-number">
            {stat.icon} {stat.value}
          </span>
          <span className="stat-label">{stat.label}</span>
          {stat.label === 'Completion' && (
            <div className="progress-bar mt-sm">
              <div
                className="progress-fill"
                style={{
                  width: `${completionRate}%`,
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};