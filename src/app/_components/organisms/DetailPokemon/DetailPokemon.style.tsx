import tw, { styled } from 'twin.macro'

export const Container = styled.div(() => [
  tw`flex justify-center items-center z-30 fixed`,
])

export const Background = styled.div(() => [
  tw`fixed h-screen w-screen bg-black bg-center bottom-0 right-0 opacity-80 cursor-pointer`,
])

export const ContainerClose = styled.div(() => [
  tw`fixed top-2 right-2 z-40 p-4 cursor-pointer text-white text-5xl`,
])
