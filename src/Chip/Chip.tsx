import React from 'react'
import cn from 'classnames'
import { ChipProps } from './Chip.types'
import './Chip.scss'

const Chip: React.FC<ChipProps> = ({ variant, color, size, className, children }) => {
  let classess = cn('rounded-full', {
    'py-1 px-2 text-xs': size === 'xs',
    'py-1 px-2 text-sm': size === 'sm',
    'py-2 px-4 text-base': size === 'md',
    'py-4 px-8 text-lg': size === 'lg',

    'bg-gray-500 hover:bg-gray-600 text-white': variant === 'default' && color === 'default',
    'bg-red-500 hover:bg-red-600 text-white': variant === 'default' && color === 'error',
    'bg-blue-500 hover:bg-blue-600 text-white': variant === 'default' && color === 'info',
    'bg-teal-500 hover:bg-teal-600 text-white': variant === 'default' && color === 'success',
    'bg-yellow-400 hover:bg-yellow-500 text-white': variant === 'default' && color === 'warning',

    'bg-white': variant === 'outlined',
    'border-2 border-gray-500 hover:bg-gray-100 text-gray-500': variant === 'outlined' && color === 'default',
    'border-2 border-red-500 hover:bg-red-100 text-red-500': variant === 'outlined' && color === 'error',
    'border-2 border-blue-500 hover:bg-blue-100 text-blue-500': variant === 'outlined' && color === 'info',
    'border-2 border-teal-500 hover:bg-teal-100 text-teal-500': variant === 'outlined' && color === 'success',
    'border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-400': variant === 'outlined' && color === 'warning',

  }, className)

  return (
    <span data-testid="Chip" className={classess}>
      {children}
    </span>
  )
}

export default Chip
