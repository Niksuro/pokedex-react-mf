import tw, { styled } from 'twin.macro'

interface ButtonPaginatorProps {
  $selected: boolean
}

interface ButtonActionPaginatorProps {
  $side: string
}

export const PaginatorContainer = styled.div(() => [
  tw`flex justify-center items-center text-white text-sm lg:text-lg m-auto w-[100%] lg:w-[40%] relative`,
])

export const ButtonPaginator = styled.button<ButtonPaginatorProps>(
  ({ $selected }) => [
    tw`bg-transparent font-bold p-2`,
    $selected === true && tw`text-yellow-300`,
  ]
)

export const ButtonActionPaginator = styled.button<ButtonActionPaginatorProps>(
  ({ $side }) => [
    tw`bg-transparent font-bold p-2 text-2xl md:text-5xl`,
    $side === 'left' && tw`absolute left-0`,
    $side === 'right' && tw`absolute right-0`,
  ]
)

export const LabelPaginator = styled.p(() => [tw`font-bold p-2`])
