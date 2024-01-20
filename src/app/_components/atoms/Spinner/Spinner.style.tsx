import tw, { styled } from 'twin.macro'

export const ContainerSpinner = styled.div(() => [
  tw`fixed bg-white bottom-0 right-0 opacity-80 h-screen w-screen flex justify-center items-center z-10`,
])

export const SpinnerStyle = styled.div(() => [
  tw`animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900`,
])
