import React from 'react';

export default function InputPrice(props) {
  const { onChange, product, city, optionPosition } = props;
  const [state, setState] = React.useState({});
  return (
    <input
      type={'number'}
      onChange={(e) => {
        onChange({
          product_id: product.id,
          option_position: optionPosition,
          option_city: city,
          option_value: e.target.value,
        });
        setState((s) => ({ ...s, value: e.target.value }));
      }}
      value={state.value}
      placeholder={product.options[optionPosition]?.prices.find((item) => item.city === city)?.value}
      onFocus={() => {
        setState((s) => ({ ...s, focus: true }));
      }}
      onBlur={() => {
        setState((s) => ({ ...s, focus: false }));
      }}
      className={`w-12 border ${
        state?.focus ? `border-opacity-95` : `border-opacity-50 `
      } border-zinc-600 rounded-sm shadow-inner`}
    />
  );
}
