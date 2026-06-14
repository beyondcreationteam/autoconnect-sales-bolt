export interface InputFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export interface TextareaFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  name: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}
