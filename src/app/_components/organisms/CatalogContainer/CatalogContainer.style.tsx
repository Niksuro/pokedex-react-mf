import tw, { styled } from 'twin.macro'

export const Title = styled.h1(() => [
  tw`text-5xl font-bold text-center text-secondary pt-32 md:pt-32`,
])

export const Subtitle = styled.h2(() => [
  tw`text-xl text-center text-secondary py-4`,
])

export const Skeleton = styled.div(() => [
  tw`animate-pulse bg-white w-full h-16 rounded-xl`,
])

export const ContainerCards = styled.div(() => [
  tw`
    grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 px-1 md:px-24 h-[70%] w-[85%] xl:w-[50%] place-content-start mx-auto
  `,
])
