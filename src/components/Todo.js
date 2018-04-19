import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li>
      <div className="task-list"
           style={{
               textDecoration: completed ? 'line-through' : 'none'
           }}>
          {text}
          <div>
              <button type="submit" className="btn-group btn-edit" />
              <button type="submit" className="btn-group btn-color" />
              <button type="submit" className="btn-group" onClick={onClick}>
                  <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" height="24px" class="gb_Ac">
                      <path d="m6 19c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z"/>
                      <path d="m0 0h24v24h-24z" fill="none"/>
                  </svg>
              </button>

          </div>
      </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
