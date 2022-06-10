import css from '../../styles/Header.module.css'

const Search = () => {
  return (
    <form
      className={css.positionRelative}
    >
      <input 
        className={css.inputTextSearch}
        type="text"
        placeholder='Buscar Productos'
      />

      <button
        className={css.inputSubmit}
        type="submit"
      >Buscar</button>
    </form>
  )
}

export default Search