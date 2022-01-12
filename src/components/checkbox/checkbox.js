import s from './checkbox.module.scss'

const Checkbox = () => {
  return (
    <div className={s.component}>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>Подтверждаю согласие на обработку моих персональных данных</label>
    </div>
  )
}

export default Checkbox
