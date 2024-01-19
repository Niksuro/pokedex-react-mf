import tw, { styled } from 'twin.macro'

const Label = styled.p(({}) => [tw`text-black`])

const Form = styled.input(({}) => [tw`bg-white w-full rounded-md py-[0.4rem]`])

const ErrorMessage = styled.p(() => [tw`text-red-500`])

export { Label, Form, ErrorMessage }
