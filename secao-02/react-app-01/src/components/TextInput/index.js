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

export default TextInput;
