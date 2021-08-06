import { func, string } from 'prop-types';
import './styles.css';

const TextInput = ({ searchValue, handleInput }) => (
  <input
    value={searchValue}
    onInput={handleInput}
    className='text-input'
    type='search'
    placeholder='Busque aqui'
  />
);

TextInput.propTypes = {
  searchValue: string.isRequired,
  handleInput: func.isRequired,
};

export default TextInput;
