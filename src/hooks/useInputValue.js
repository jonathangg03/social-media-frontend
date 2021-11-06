import { useState } from 'react'

export default function useInputValue(default_props) {
  const [value, setValue] = useState(default_props.value)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return { ...default_props, value, onChange }
}
