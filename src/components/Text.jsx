import React from 'react'

export default function Text({text,size}) {
  return (
    <p className={`text-${size} font-normal text-gray-500 lg:text-${size}m dark:text-gray-400`}>{text}</p>)
}
