<div className='modal-wrapper__form-block_checkbox'>
              <input
                type='checkbox'
                id='checkbox8'
                name='checkbox8'
                {...formik.getFieldProps('checkbox')}
              />

              <label htmlFor='checkbox8'>
                Подтверждаю согласие на обработку моих персональных данных (
                {/* eslint-disable-next-line */}
                <a onClick={() => setOpenModal(true)}>Политика обработки и хранения данных</a>)
              </label>
              {formik.touched.checkbox && formik.errors.checkbox ? (
                <div className='error'>{formik.errors.checkbox}</div>
              ) : null}
            </div>
