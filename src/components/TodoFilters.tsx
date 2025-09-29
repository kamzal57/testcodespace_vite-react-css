import React from 'react';
import type { TodoFilter, Todo } from '../types/todo';

interface TodoFiltersProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  categories: string[];
  onClearCompleted: () => void;
  completedCount: number;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  onFilterChange,
  categories,
  onClearCompleted,
  completedCount,
}) => {
  const statusFilters: { key: TodoFilter['status']; label: string; icon: string }[] = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'active', label: 'Active', icon: '⚡' },
    { key: 'completed', label: 'Completed', icon: '✅' },
  ];

  const priorityFilters: { key: Todo['priority']; label: string; icon: string }[] = [
    { key: 'high', label: 'High', icon: '🔴' },
    { key: 'medium', label: 'Medium', icon: '🟡' },
    { key: 'low', label: 'Low', icon: '🟢' },
  ];

  const handleStatusChange = (status: TodoFilter['status']) => {
    onFilterChange({ ...filter, status });
  };

  const handlePriorityChange = (priority?: Todo['priority']) => {
    onFilterChange({ ...filter, priority });
  };

  const handleCategoryChange = (category?: string) => {
    onFilterChange({ ...filter, category });
  };

  const resetFilters = () => {
    onFilterChange({ status: 'all' });
  };

  const hasActiveFilters = filter.priority || filter.category;

  return (
    <div className="todo-filters">
      <div className="flex justify-between items-center mb-md">
        <h3 className="card-title">Filters & Actions</h3>
        <div className="flex gap-sm">
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="btn btn-secondary btn-sm"
              title="Clear all filters"
            >
              🔄 Reset
            </button>
          )}
          {completedCount > 0 && (
            <button
              onClick={onClearCompleted}
              className="btn btn-danger btn-sm"
              title={`Clear ${completedCount} completed todo${completedCount === 1 ? '' : 's'}`}
            >
              🗑️ Clear Completed ({completedCount})
            </button>
          )}
        </div>
      </div>

      <div className="filter-grid">
        {/* Status Filter */}
        <div className="form-group">
          <label className="form-label">Status</label>
          <div className="filter-buttons">
            {statusFilters.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => handleStatusChange(key)}
                className={`filter-btn ${filter.status === key ? 'active' : ''}`}
                title={`Show ${label.toLowerCase()} todos`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Priority Filter */}
        <div className="form-group">
          <label className="form-label">Priority</label>
          <div className="filter-buttons">
            <button
              onClick={() => handlePriorityChange(undefined)}
              className={`filter-btn ${!filter.priority ? 'active' : ''}`}
              title="Show all priorities"
            >
              🌈 All
            </button>
            {priorityFilters.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => handlePriorityChange(key)}
                className={`filter-btn ${filter.priority === key ? 'active' : ''}`}
                title={`Show ${label.toLowerCase()} priority todos`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="form-group">
          <label htmlFor="category-filter" className="form-label">
            Category
          </label>
          <select
            id="category-filter"
            value={filter.category || ''}
            onChange={(e) => handleCategoryChange(e.target.value || undefined)}
            className="form-input form-select"
          >
            <option value="">🌈 All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                📁 {category}
              </option>
            ))}
          </select>
        </div>

        {/* Quick Actions */}
        <div className="form-group">
          <label className="form-label">Quick Actions</label>
          <div className="filter-buttons">
            <button
              onClick={() => window.print()}
              className="filter-btn"
              title="Print todo list"
            >
              🖨️ Print
            </button>
            <button
              onClick={() => {
                const data = JSON.stringify(localStorage.getItem('vite-react-todos'), null, 2);
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'todos-backup.json';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="filter-btn"
              title="Export todos as JSON"
            >
              💾 Export
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-md">
          <div className="flex gap-sm items-center flex-wrap">
            <span className="text-secondary text-sm">Active filters:</span>
            {filter.priority && (
              <span className="badge badge-primary">
                Priority: {filter.priority}
              </span>
            )}
            {filter.category && (
              <span className="badge badge-primary">
                Category: {filter.category}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};