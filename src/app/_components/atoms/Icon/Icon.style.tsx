import tw, { css, styled } from 'twin.macro'

interface IconProps {
  $icon: string
  $clickeable?: boolean
}

export const IconStyle = styled.p<IconProps>(({ $icon, $clickeable }) => [
  css`
    &:after {
      font-family: 'icomoon';
      content: '${$icon}';
      padding: 0 8px;
    }
  `,
  $clickeable && tw`cursor-pointer`,
  tw`flex items-center justify-center`,
])
