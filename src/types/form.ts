export type FieldType = 'text' | 'number' | 'date' | 'email' | 'textarea';

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
}

export interface CustomForm {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  createdAt: Date;
  updatedAt: Date;
}