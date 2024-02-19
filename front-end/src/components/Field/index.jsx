import PropTypes from 'prop-types'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  INPUT_PASSWORD: 2,
  INPUT_CHECKBOX: 3,
}

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  id,
  defaultValue,
  label,
  containerClassName,
  inputClassName,
  readOnly,
  onChange,
  checked,
  value,
}) => {
  let component
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          id={id}
          autoComplete={id}
          defaultValue={defaultValue}
          className={inputClassName}
          readOnly={readOnly}
          required
          value={value}
        />
      )
      break
    case FIELD_TYPES.INPUT_PASSWORD:
      component = (
        <input type="password" id={id} autoComplete={id} defaultValue={defaultValue} required />
      )
      break
    case FIELD_TYPES.INPUT_CHECKBOX:
      component = <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      break
    default:
      component = <input type="text" id={id} />
      break
  }
  return (
    <div className={containerClassName}>
      <label htmlFor={id}>{label}</label>
      {component}
    </div>
  )
}

Field.prototype = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  component: PropTypes.node,
}

export default Field
