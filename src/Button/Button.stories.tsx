import React from 'react'
import Button from './Button'

export default {
  title: 'Button'
}

export const Preview = () => {
  return (
    <div className="p-6">
      <Button foo="Preview" />
    </div>
  )
}

export const Playground = () => {
  return (
    <div className="p-6">
      <Button foo="Playground" />
    </div>
  )
}
