import { Orbitron } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Anton } from 'next/font/google'

export const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400', '700', '900']
})

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400']
})
