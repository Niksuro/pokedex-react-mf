import tw, { styled } from 'twin.macro'

export const Title = styled.h1(() => [
  tw`text-5xl font-bold text-center text-white pt-32 md:pt-32`,
])

export const Subtitle = styled.h2(() => [
  tw`text-xl text-center text-white py-4`,
])

export const Skeleton = styled.div(() => [
  tw`animate-pulse bg-secondary w-full h-12 rounded-xl`,
])

export const ContainerCards = styled.div(() => [
  tw`
    grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-1 md:px-24 h-auto w-[85%] xl:w-[60%] place-content-start mx-auto
  `,
])
