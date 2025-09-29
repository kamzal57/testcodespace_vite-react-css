import React, { useState, useRef } from 'react';
import type { Todo } from '../types/todo';

interface TodoFormProps {
  onAddTodo: (text: string, priority: Todo['priority'], category: string) => void;
  categories: string[];
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo, categories }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');
  const [category, setCategory] = useState('General');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      inputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    onAddTodo(text.trim(), priority, category);
    setText('');
    setPriority('medium');
    setIsSubmitting(false);
    
    // Focus back to input for better UX
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit(e as React.FormEvent);
    }
  };

  return (
    <div className="todo-form">
      <h2 className="card-title mb-md">Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="todo-text" className="form-label">
              Todo Text *
            </label>
            <input
              ref={inputRef}
              id="todo-text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              className="form-input"
              disabled={isSubmitting}
              maxLength={200}
              required
            />
            <small className="text-secondary">
              {text.length}/200 characters
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="todo-priority" className="form-label">
              Priority
            </label>
            <select
              id="todo-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Todo['priority'])}
              className="form-input form-select"
              disabled={isSubmitting}
            >
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="todo-category" className="form-label">
              Category
            </label>
            <select
              id="todo-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-input form-select"
              disabled={isSubmitting}
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
              <option value="Learning">Learning</option>
              {categories
                .filter(cat => !['General', 'Work', 'Personal', 'Shopping', 'Health', 'Learning'].includes(cat))
                .map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))
              }
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !text.trim()}
            className={`btn btn-primary btn-lg ${isSubmitting ? 'animate-pulse' : ''}`}
          >
            {isSubmitting ? (
              <>
                <span className="spinner" />
                Adding...
              </>
            ) : (
              <>
                ➕ Add Todo
              </>
            )}
          </button>
        </div>

        <div className="mt-md">
          <small className="text-secondary">
            💡 Tip: Press Ctrl/Cmd + Enter to quickly add a todo
          </small>
        </div>
      </form>
    </div>
  );
};