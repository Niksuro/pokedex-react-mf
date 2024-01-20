import tw, { css, styled } from 'twin.macro'

interface IconProps {
  $icon: string
}

export const ContainerInputField = styled.div(() => [tw`flex flex-row border-b-2`])

export const Label = styled.p(() => [tw`text-black font-bold`])

export const Form = styled.input(() => [
  tw`bg-white w-full rounded-md py-[0.4rem] px-[8px] focus:outline-0`,
])

export const Icon = styled.p<IconProps>(({ $icon }) => [
  css`
    &:after {
      font-family: 'icomoon';
      content: '${$icon}';
      padding-left: 8px;
    }
  `,
  tw`flex items-center justify-center`,
])

export const ErrorMessage = styled.p(() => [tw`text-red-500`])
