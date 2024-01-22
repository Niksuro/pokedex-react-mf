import tw, { styled } from 'twin.macro'

interface IContainer {
  $clickeable: boolean
}

export const Container = styled.div<IContainer>(($clickeable) => [
  tw`flex flex-row justify-start items-center w-full`,
  $clickeable && tw`cursor-pointer`,
])

export const Text = styled.p(() => [tw`text-sm`])
