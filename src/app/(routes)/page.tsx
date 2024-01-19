'use client'
import InputField from '../_components/atoms/InputField/InputField'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InputField label="Usuario" error="" />
    </main>
  )
}
