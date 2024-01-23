import tw, { styled } from 'twin.macro'
import Image from 'next/image'

export const Container = styled.div(() => [
  tw`relative w-[50px] h-[50px] rounded-3xl bg-white shadow-lg flex justify-center text-[1.5rem] border-2 border-primary`,
])

export const ImageContainer = styled(Image)(() => [
  tw`relative w-[50px] h-[50px] rounded-3xl border-2 border-secondary cursor-pointer`,
])
