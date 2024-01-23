import tw, { styled } from 'twin.macro'

export const ContainerShortCard = styled.div(() => [
  tw`
    w-full h-16 text-2xl text-white relative bg-secondary  rounded-xl shadow-[0px_10px_10px_2px_rgba(0, 0, 0, 0.452)] flex justify-between items-center p-4 cursor-pointer transform transition-all duration-500
    hover:bg-primary hover:text-terciary hover:scale-[102%] hover:shadow-[0px_10px_15px_5px_rgba(0, 0, 0, 0.452)]
    `,
])

export const Title = styled.h2(() => [
  tw`
    capitalize
    `,
])
