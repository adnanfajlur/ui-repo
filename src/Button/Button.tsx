import React from 'react'
import { ButtonProps } from './Button.types'
import './Button.scss'

const Button: React.FC<ButtonProps> = ({ foo }) => {
  return (
    <div data-testid="Button" className="foo-bar">{foo}</div>
  )
}

export default Button
