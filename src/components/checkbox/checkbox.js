import './checkbox.scss'

const Checkbox = () => {
  return (
    <div className='checkbox'>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>Подтверждаю согласие на обработку моих персональных данных</label>
    </div>
  )
}

export default Checkbox
