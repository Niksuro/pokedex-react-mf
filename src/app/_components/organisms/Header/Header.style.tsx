import tw, { styled } from 'twin.macro'
import Image from 'next/image'

export const HeaderStyle = styled.header(() => [
  tw`fixed left-4 right-4 w-auto h-auto bg-primary flex flex-row justify-between items-center p-4 shadow-lg rounded-md z-20`,
])

export const Logo = styled(Image)(() => [tw`w-[200px] h-auto`])
