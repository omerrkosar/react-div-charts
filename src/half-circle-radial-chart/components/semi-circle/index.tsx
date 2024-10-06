import React from 'react'

interface SemiCircleProps {
    color?: string;
    exceptionColor?: string;
    width: number;
    lineWidth?: number;
    minValue?: number;
    maxValue?: number;
    hideInnerCircularLine?: boolean;
    value: number;
    renderInnerCircularLine?:()=>React.ReactNode;
}

const SemiCircle: React.FC<SemiCircleProps> = ({
  color,
  exceptionColor,
  width,
  lineWidth = 20,
  minValue = 0,
  maxValue = 100,
  value,
  hideInnerCircularLine = false,
  renderInnerCircularLine,
}) => {

  const defaultRenderInnerCircularLine = () => {
    if (hideInnerCircularLine) return null
    return (
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: '#f5f5f5',
          position: 'absolute',
          left: `${lineWidth / 2}px`,
          top: `${lineWidth / 2}px`,
          width: width - lineWidth,
          height: width - lineWidth,
        }}
      />
    )
  }

  return (
    <div style={{ width,
      height: width / 2,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'inherit' }}>
      <div
        style={
          {
            position: 'absolute',
            left: 0,
            top: 0,
            height: 'inherit',
            width: 'inherit',
            transformOrigin: '50% 100%',
            transition: 'all 1s ease-in-out',
            backgroundColor: color,
            borderRadius: `${width / 2}px ${width / 2}px 0 0`,
            transform: `rotate(${(180 * value) / (maxValue - minValue) - 180}deg)`,
          }
        }
      />
      <div
        style={
          {
            position: 'absolute',
            left: 0,
            top: 0,
            height: 'inherit',
            width: 'inherit',
            transformOrigin: '50% 100%',
            transition: 'all 1s ease-in-out',

            backgroundColor: exceptionColor,
            borderRadius: `${width / 2}px ${width / 2}px 0 0`,
            transform: `rotate(${(180 * value) / (maxValue - minValue)}deg)`,
          }
        }
      />
      {renderInnerCircularLine ? renderInnerCircularLine() : defaultRenderInnerCircularLine()}


      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          backgroundColor: 'inherit',
          left: `${(lineWidth * 3) / 2}px`,
          top: `${(lineWidth * 3) / 2}px`,
          width: width - lineWidth * 3,
          height: width - lineWidth * 3,
        }}
      />
    </div>
  )
}

export default SemiCircle
