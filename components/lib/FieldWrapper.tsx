import * as React from 'react';

type FieldType = 'text' | 'textarea' | 'list';

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
}

export const FieldWrapper: React.FC<FieldWrapperProps> = (props: FieldWrapperProps) => {
  const { label, className, id } = props;
  return (
    <React.Fragment>
      {label && (
        <label className={className && className[0]} htmlFor={id}>
          {label}
        </label>
      )}
      <Field {...props}></Field>
    </React.Fragment>
  );
};

export const Field = (props: FieldWrapperProps) => {
  const { inputType, id, type, value, placeholder, className, required, listItems, onChange } = props;
  console.log('🚀 ~ file: FieldWrapper.tsx ~ line 31 ~ Field ~ type', type);
  switch (inputType!.toLowerCase()) {
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
