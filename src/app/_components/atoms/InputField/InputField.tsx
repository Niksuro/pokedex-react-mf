import { ErrorMessage, Form, Label } from './InputField.styles'

interface InputFieldProps {
  label: string
  error?: string
  type?: string
  placeholder?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({
  label,
  error,
  type,
  placeholder,
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <>
      <Label data-test={'label-form'}>{label}</Label>
      <Form />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}

export default InputField
