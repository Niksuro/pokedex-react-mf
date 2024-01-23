import tw, { styled } from 'twin.macro'
import Image from 'next/image'

interface DetailUserProps {
  $show: boolean
}

export const DetailUserContainer = styled.div<DetailUserProps>(({ $show }) => [
  tw`bg-white w-[500px] h-[400px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-4 z-30 flex flex-col justify-center items-center`,
  tw`opacity-0 scale-0 transition-all`,
  $show === true && tw`opacity-100 scale-100`,
])

export const DetailUserImageContainer = styled(Image)(() => [
  tw`relative w-[150px] h-[150px] rounded-full border-2 border-secondary cursor-pointer`,
])

export const DetailUserContainerImage = styled.div(() => [
  tw`relative w-[150px] h-[150px] rounded-full text-7xl text-terciary bg-white shadow-lg flex justify-center border-2 border-primary`,
])

export const DetailUserLabel = styled.p(() => [
  tw`text-lg font-bold text-terciary mt-4`,
])

export const DetailUserName = styled.p(() => [
  tw`text-5xl font-bold text-terciary mb-4`,
])

export const DetailUserEmail = styled.p(() => [tw`text-lg text-terciary mb-2`])

export const DetailUserClose = styled.div(() => [
  tw`fixed text-4xl opacity-75 text-secondary top-2 right-2`,
])
