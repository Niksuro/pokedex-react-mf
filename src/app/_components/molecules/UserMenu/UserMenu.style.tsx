import tw, { styled } from 'twin.macro'

export const Container = styled.div(() => [
  tw`absolute flex flex-col right-2 top-0 p-4 w-[300px] text-lg h-auto text-terciary rounded-xl bg-primary shadow-lg justify-center border border-secondary`,
])

export const ContainerUserData = styled.div(() => [
  tw`flex flex-col items-center justify-center border-b-[1px] border-secondary pb-2 mb-4 w-full`,
])

export const UserName = styled.p(() => [
  tw`text-center text-xl font-bold w-full`,
])

export const EmailText = styled.p(() => [
  tw`text-center text-sm font-thin  w-full`,
])
