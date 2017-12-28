import React from 'react'

const Option = ({
  // props
  id,
  value,
  name,
  disabled
}={}) => {
  const props = {disabled};

  return (
    <option
      key={id}
      value={value}
      {...props}
    >{name}</option>
  );
}

const Select = ({
  // props
  items=[],
  defaultValue='',
  onChange=() => undefined,

  // context
  Option
}={}) => (
  <select
    defaultValue={defaultValue}
    onChange={(e) => onChange(e.target.value)}
  >{items.map(Option)}</select>
);

export default (props) => Select({ ...props,
    Option: props.Option || Option
});
