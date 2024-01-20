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
  leftIcon?: string
  rightIcon?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickRightIcon?: () => void
}

const InputField = ({
  label,
  error,
  type,
  placeholder,
  leftIcon,
  rightIcon,
  name,
  value,
  onChange,
  onClickRightIcon,
}: InputFieldProps) => {  
  return (
    <>
      <Label data-test={'label-form'}>{label}</Label>
      <ContainerInputField>
        {leftIcon && <Icon $icon={leftIcon} />}
        <Form
          placeholder={placeholder}
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
        />
        {rightIcon && (
          <Icon
            $icon={rightIcon}
            $clickeable={onClickRightIcon ? true : false}
            onClick={onClickRightIcon}
          />
        )}
      </ContainerInputField>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}

export default InputField
