import * as React from 'react';
import InputMask from 'react-input-mask';

type FieldType = 'text' | 'textarea' | 'list' | 'tel';

interface FieldWrapperProps {
  id?: string;
  label?: string;
  inputType?: FieldType;
  listItems?: string[];
  value?: any;
  className?: string[];
  placeholder?: string;
  name?: string;
  type?: string;
  required?: boolean;
  onChange: any;
  rows?: number;
  showTooltip?: boolean;
  tooltips?: boolean;
  children?: React.ReactNode;
}

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, id, children, showTooltip } = props;
  return (
    <React.Fragment>
      {label && (
        <label className={className && className[0]} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`relative w-full`}>
        <Field {...props}></Field>
        {showTooltip && children}
      </div>
    </React.Fragment>
  );
};

export const Field = (props: FieldWrapperProps) => {
  const { inputType, id, type, value, placeholder, className, required, listItems, onChange, rows } = props;
  switch (inputType!.toLowerCase()) {
    case 'tel': {
      return (
        <InputMask
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e, id)}
          // onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
          className={className && className[1]}
          required={required && required}
          mask='+7\ (999) 999 99 99'
          maskPlaceholder='_'
        />
      );
    }
    case 'text': {
      return (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e, id)}
          // onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
          className={className && className[1]}
          required={required && required}
        />
      );
    }
    case 'textarea': {
      return (
        <textarea
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => onChange(e, id)}
          // onBlur={
          //   (e: React.FormEvent<HTMLTextAreaElement>) => console.log(e) /* TODO: validate field value */
          // }
          className={className && className[1]}
          required={required && required}
          rows={rows && rows}
        />
      );
    }
    case 'list': {
      return (
        <select
          id={id}
          name={id}
          value={value}
          // onChange={
          //   (e: React.FormEvent<HTMLSelectElement>) => console.log(e) /* TODO: push change to form values */
          // }
          // onBlur={(e: React.FormEvent<HTMLSelectElement>) => console.log(e) /* TODO: validate field value */}
          placeholder={placeholder}
          className={className && className[1]}
          required={required && required}
        >
          {listItems &&
            listItems.map((item, i) => (
              <option key={`listitem${i}`} value={item}>
                {item}
              </option>
            ))}
        </select>
      );
    }

    default:
      return <React.Fragment></React.Fragment>;
  }
};
Field.defaultProps = {
  inputType: 'text',
};

export default FieldWrapper;
