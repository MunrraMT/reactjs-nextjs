import './styles.css';

import { Component } from 'react';

class Button extends Component {
  render() {
    const { children, handleClick, disabled } = this.props;

    return (
      <button
        disabled={disabled}
        className='btn-more-posts'
        type='button'
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
