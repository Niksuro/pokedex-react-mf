import Image from 'next/image'
import tw, { styled } from 'twin.macro'

interface PokemonCardContainerProps {
    $variant?: string
    $show: boolean
}

export const PokemonCardContainer = styled.div<PokemonCardContainerProps>(({$variant, $show}) => [
  tw`
    w-[300px] h-[350px] lg:w-[500px] lg:h-[550px] bg-white z-10 rounded-2xl shadow-2xl overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
  `,
    $variant === 'normal' && tw`bg-normal text-normal`,
    $variant === 'fire' && tw`bg-fire text-fire`,
    $variant === 'water' && tw`bg-water text-water`,
    $variant === 'grass' && tw`bg-grass text-grass`,
    $variant === 'electric' && tw`bg-electric text-electric`,
    $variant === 'ice' && tw`bg-ice text-ice`,
    $variant === 'fighting' && tw`bg-fighting text-fighting`,
    $variant === 'poison' && tw`bg-poison text-poison`,
    $variant === 'ground' && tw`bg-ground text-ground`,
    $variant === 'flying' && tw`bg-flying text-flying`,
    $variant === 'psychic' && tw`bg-psychic text-psychic`,
    $variant === 'bug' && tw`bg-bug text-bug`,
    $variant === 'rock' && tw`bg-rock text-rock`,
    $variant === 'ghost' && tw`bg-ghost text-ghost`,
    $variant === 'dark' && tw`bg-dark text-dark`,
    $variant === 'dragon' && tw`bg-dragon text-dragon`,
    $variant === 'steel' && tw`bg-steel text-steel`,
    $variant === 'fairy' && tw`bg-fairy text-fairy`,
    tw`opacity-0 scale-0 transition-all`,
    $show === true && tw`opacity-100 scale-100`,
])

export const ImageCard = styled(Image)(() => [
    tw`h-[70%] w-auto scale-100 rounded-t-lg object-contain block mx-auto`,
])

export const ImageCardBackground = styled(Image)(() => [
    tw`h-[70%] w-auto scale-100 rounded-t-lg object-contain block mx-auto fixed top-0 right-0`,
])

export const DescriptionContainer = styled.div(() => [
    tw`h-[40%] w-full bg-white absolute bottom-0 p-4 lg:p-8 opacity-80`,
])

export const TagWeight = styled.p(() => [
    tw`bg-green-600 text-xs lg:text-lg text-white absolute bottom-[42%] right-4 lg:right-8 py-1 px-6 rounded-full shadow-lg`,
])

export const PokemonName = styled.h3(() => [
    tw`text-3xl lg:text-5xl font-bold uppercase`,
])

export const ContainerPokemonMoves = styled.div(() => [
    tw`grid grid-cols-3 absolute bottom-4 lg:bottom-8 gap-[1px] w-[90%] h-auto`,
])

export const PokemonMoves = styled.p(() => [
    tw`text-sm lg:text-xl font-light`,
])
