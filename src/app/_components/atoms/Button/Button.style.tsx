import tw, { styled } from 'twin.macro'

interface ButtonProps {
    $variant: 'primary' | 'secondary'
}

export const ButtonStyle = styled.button<ButtonProps>(({ $variant }) => [
    tw`shadow-lg hover:shadow-none hover:scale-105 active:scale-100 focus:shadow-none focus:outline-none transition-all duration-300 ease-in-out`,
    tw`text-white bg-green-600 px-4 py-2 rounded-md font-bold text-sm`,
    $variant === 'secondary' && tw`text-white bg-red-500 px-4 py-2 rounded-md font-bold text-sm`,
])