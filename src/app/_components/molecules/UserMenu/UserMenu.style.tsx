import tw, { styled } from 'twin.macro'

export const Container = styled.div(() => [
  tw`absolute flex flex-col right-2 top-16 p-4 w-[300px] text-lg h-auto rounded-xl bg-white shadow-lg flex justify-center border border-primary`,
])

export const ContainerUserData = styled.div(() => [
  tw`flex flex-col items-center justify-center border-b-[1px] border-primary pb-2 mb-4 w-full`,
])

export const UserName = styled.p(() => [
  tw`text-center text-xl font-bold w-full`,
])

export const EmailText = styled.p(() => [
  tw`text-center text-sm font-thin  w-full`,
])
