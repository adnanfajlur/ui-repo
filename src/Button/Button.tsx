import React from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.types'
import './Button.scss'

const Button: React.FC<ButtonProps> = ({ variant, color, size, className, children, ...args }) => {
  let classess = cn('rounded', {
    'py-1 px-2 text-sm': size === 'sm',
    'py-2 px-4 text-base': size === 'md',
    'py-4 px-8 text-lg': size === 'lg',

    'bg-gray-500 hover:bg-gray-600 text-white': variant === 'default' && color === 'default',
    'bg-teal-500 hover:bg-teal-600 text-white': variant === 'default' && color === 'primary',
    'bg-red-500 hover:bg-red-600 text-white': variant === 'default' && color === 'error',

    'bg-white': variant === 'outlined',
    'border-2 border-gray-500 hover:bg-gray-100 text-gray-500': variant === 'outlined' && color === 'default',
    'border-2 border-teal-500 hover:bg-teal-100 text-teal-500': variant === 'outlined' && color === 'primary',
    'border-2 border-error-500 hover:bg-error-100 text-error-500': variant === 'outlined' && color === 'error',

  }, className)

  if (args.disabled) classess += 'gray'

  return (
    <button
      data-testid="Button"
      className={classess}
      {...args}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'default',
  color: 'default',
  size: 'md',
}

export default Button
