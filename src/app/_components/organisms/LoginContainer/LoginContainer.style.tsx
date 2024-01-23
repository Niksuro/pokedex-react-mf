import tw, { styled } from 'twin.macro'

export const Title = styled.h1(() => [
  tw`text-4xl font-bold text-center mt-8`,
])

export const Subtitle = styled.h2(() => [
  tw`text-lg text-center my-4`,
])

export const Container = styled.div(() => [
  tw`flex flex-col h-auto w-[400px] max-md:h-[80%] max-md:w-[80%] bg-primary text-terciary rounded-xl shadow-xl p-8`,
])