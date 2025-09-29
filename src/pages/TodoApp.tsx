import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoForm } from '../components/TodoForm';
import { TodoFilters } from '../components/TodoFilters';
import { TodoStats } from '../components/TodoStats';
import { TodoItem } from '../components/TodoItem';

export const TodoApp: React.FC = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats,
  } = useTodos();

  const getFilteredMessage = () => {
    if (filter.status === 'active') return 'Active Todos';
    if (filter.status === 'completed') return 'Completed Todos';
    if (filter.priority) return `${filter.priority.charAt(0).toUpperCase() + filter.priority.slice(1)} Priority Todos`;
    if (filter.category) return `${filter.category} Todos`;
    return 'All Todos';
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        {/* Header */}
        <header className="todo-header">
          <h1 className="todo-title">Todo Master</h1>
          <p className="todo-subtitle">
            Organize your life with style and efficiency
          </p>
        </header>

        {/* Statistics */}
        <TodoStats
          total={stats.total}
          active={stats.active}
          completed={stats.completed}
          categories={stats.categories}
        />

        {/* Add Todo Form */}
        <TodoForm onAddTodo={addTodo} categories={stats.categories} />

        {/* Filters */}
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          categories={stats.categories}
          onClearCompleted={clearCompleted}
          completedCount={stats.completed}
        />

        {/* Todo List */}
        <div className="todo-list">
          <div className="todo-list-header">
            <h2 className="todo-list-title">{getFilteredMessage()}</h2>
            <div className="todo-count">
              {todos.length} item{todos.length !== 1 ? 's' : ''}
            </div>
          </div>

          {todos.length === 0 ? (
            <div className="todo-empty">
              <div className="empty-icon">
                {filter.status === 'completed' ? '🎉' : 
                 filter.status === 'active' ? '💪' : '📝'}
              </div>
              <div className="empty-text">
                {filter.status === 'completed' ? 'No completed todos yet' :
                 filter.status === 'active' ? 'No active todos' :
                 stats.total === 0 ? 'No todos yet' : 'No todos match your current filters'}
              </div>
              <div className="empty-subtext">
                {filter.status === 'completed' ? 'Complete some todos to see them here!' :
                 filter.status === 'active' ? 'Add some todos to get started!' :
                 stats.total === 0 ? 'Add your first todo above to get started!' :
                 'Try adjusting your filters to see more todos'}
              </div>
            </div>
          ) : (
            <div className="todo-items">
              {todos.map((todo, index) => (
                <div
                  key={todo.id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TodoItem
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                </div>
              ))}
            </div>
          )}

          {todos.length > 0 && (
            <div className="todo-footer">
              <div className="todo-count">
                Showing {todos.length} of {stats.total} todos
              </div>
              <div className="flex gap-sm">
                <button
                  onClick={() => setFilter({ status: 'all' })}
                  className="btn btn-secondary btn-sm"
                  disabled={filter.status === 'all' && !filter.priority && !filter.category}
                >
                  Show All
                </button>
                {stats.completed > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="btn btn-danger btn-sm no-print"
                  >
                    Clear Completed
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-xl">
          <p className="text-secondary">
            Built with ❤️ using Vite + React + TypeScript + CSS
          </p>
          <p className="text-tertiary text-sm mt-sm">
            © 2024 Todo Master - Your productivity companion
          </p>
        </footer>
      </div>
    </div>
  );
};