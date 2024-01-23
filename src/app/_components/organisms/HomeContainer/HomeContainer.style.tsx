import tw, { styled } from 'twin.macro'
import Image from 'next/image'

export const ContainerMain = styled.main(() => [
  tw`flex min-h-screen flex-col h-full w-full items-center justify-center md:p-24 bg-center relative
  bg-cover lg:bg-cover bg-[url(https://i.pinimg.com/originals/c1/a2/1f/c1a21fe26ddcae561bceb5ca75da3a67.png)]`,
])

export const CopyrigthText = styled.p(() => [
  tw`text-center text-sm text-gray-200 absolute bottom-0 left-0 right-0 mb-4`,
])

export const ContainerImages = styled.div(() => [
  tw`flex flex-row m-4 gap-2 absolute lg:bottom-0 max-lg:top-0 right-0`,
])

export const ImageStyle = styled(Image)(() => [

])
