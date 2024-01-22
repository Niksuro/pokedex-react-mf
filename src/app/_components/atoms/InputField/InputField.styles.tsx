import tw, { css, styled } from 'twin.macro'

export const ContainerInputField = styled.div(() => [
  tw`flex flex-row border-b-2`,
])

export const Label = styled.p(() => [tw`text-black font-bold`])

export const Form = styled.input(() => [
  tw`bg-white w-full rounded-md py-[0.4rem] px-[8px] focus:outline-0`,
])

export const ErrorMessage = styled.p(() => [tw`text-red-500`])
