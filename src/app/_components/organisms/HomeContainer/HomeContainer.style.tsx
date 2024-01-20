import tw, { styled } from 'twin.macro'
import Image from 'next/image'

export const ContainerMain = styled.main(() => [
  tw`flex min-h-screen flex-col h-full w-full items-center justify-center md:p-24 bg-center relative
  bg-cover lg:bg-auto bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fe56053-597e-45b3-a3b1-f26197574147/deb1egj-cb6dd8c6-a608-4945-8321-2578d96242bb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmZTU2MDUzLTU5N2UtNDViMy1hM2IxLWYyNjE5NzU3NDE0N1wvZGViMWVnai1jYjZkZDhjNi1hNjA4LTQ5NDUtODMyMS0yNTc4ZDk2MjQyYmIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m58f193eu21fqU1VghfTJIaBZ2gKy2-JGFkqrfBM0ac)]`,
])

export const CopyrigthText = styled.p(() => [
  tw`text-center text-sm text-gray-200 absolute bottom-0 left-0 right-0 mb-4`,
])

export const ContainerImages = styled.div(() => [
  tw`flex flex-row m-4 gap-2 absolute lg:bottom-0 max-lg:top-0 right-0`,
])

export const ImageStyle = styled(Image)(() => [

])
