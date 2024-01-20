import {
  ContainerInputField,
  ErrorMessage,
  Form,
  Icon,
  Label,
} from './InputField.styles'

interface InputFieldProps {
  label: string
  error?: string
  type: string
  placeholder?: string
  icon?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({
  label,
  error,
  type,
  placeholder,
  icon,
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <>
      <Label data-test={'label-form'}>{label}</Label>
      <ContainerInputField>
        {icon && <Icon $icon={icon} />}
        <Form placeholder={placeholder} type={type} />
      </ContainerInputField>

      <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}

export default InputField
