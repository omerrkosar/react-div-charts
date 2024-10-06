import React from 'react'

interface ArrowProps {
    size?: number;
    color?:string

}

const Arrow: React.FC<ArrowProps> = ({ size=3,color='red' }) => {
  return (
    <div style={{
      width: 0,
      height: 0,
      borderTop: `${size}px solid transparent`,
      borderBottom: `${size}px solid transparent`,
      borderRight: `${size}px solid ${color}`,
    }}
    />
  )

}

export default Arrow
