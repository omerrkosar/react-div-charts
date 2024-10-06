import React, { FC } from 'react'

import Arrow from '../arrow'
import { HalfAngleRadialChartProps } from '../types'
import SemiCircle from './components/semi-circle'

const HalfAngleRadialChart: FC<HalfAngleRadialChartProps> = ({
  value,
  width = 256,
  lineWidth=20,
  minValue=0,
  maxValue=100,
  iconSize = 50,
  hideBlob = false,
  hideBlobText = false,
  hidePointer = false,
  hideMinMax = false,
  hideInnerCircularLine = false,
  color = '#b71c1c',
  exceptionColor = '#e0e0e0',
  renderBlob,
  renderBlobText,
  renderPointer,
  renderMinMax,
  renderInnerCircularLine,
}) => {

  const defaultRenderPointer = () => {
    if(hidePointer) return null
    return <Arrow size={iconSize/2} color='#000' />
  }

  const defaultRenderMinMax = (value:number) => {
    if(hideMinMax) return null
    return (
      <p
        style={{
          fontSize: '13px',
          fontFamily: '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
          color: '#757575',
          opacity: 0.5,
          transition: 'all 1s ease-in-out',
        }}>
        {value}
      </p>
    )
  }

  const defaultRenderBlob = () => {
    if(hideBlob) return null
    return (
      <div style={{
        borderRadius: '50%',
        border: '2px solid #f5f5f5',
        backgroundColor: '#212121',
        transition: 'all 1s ease-in-out',
        height: 'inherit',
        width: 'inherit',
      }} />
    )
  }

  const defaultRenderBlobText = () => {
    if(hideBlobText) return null
    return (
      <p style={{
        fontFamily: '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#212121',
        transition: 'all 1s ease-in-out',
      }}>
        {value}%
      </p>
    )
  }

  return (
    <div
      style={{ width: width + 60,
        height: width / 2 + 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'inherit',
        position: 'relative',
      }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'inherit',
      }}>
        <SemiCircle
          color={color}
          exceptionColor={exceptionColor}
          minValue={minValue}
          maxValue={maxValue}
          lineWidth={lineWidth}
          width={width}
          hideInnerCircularLine={hideInnerCircularLine}
          value={value}
          renderInnerCircularLine={renderInnerCircularLine} />
        <div style={{
          rotate: `${(180 * value) / (maxValue - minValue)}deg`,
          width: iconSize,
          height: iconSize,
          left: `calc(50% - ${iconSize / 2}px)`,
          position: 'absolute',
          zIndex: 10,
          transition: 'all 1s ease-in-out',

          bottom: -1 * iconSize / 2,
        }}>
          {renderPointer ? renderPointer() : defaultRenderPointer()}
        </div>
        <div style={{ left: '0px', bottom: '-30px',position:'absolute' }}>
          {renderMinMax ? renderMinMax(minValue) : defaultRenderMinMax(minValue)}

        </div>
        <div style={{ right: '0px', bottom: '-30px',position:'absolute' }}>
          {renderMinMax ? renderMinMax(maxValue) : defaultRenderMinMax(maxValue)}
        </div>

        <div
          style={{ width: '50%',
            left: '0px',
            bottom: '0px',
            position: 'absolute',
            height: '100%' }}>
          <div
            style={{ rotate: `${(180 * value) / (maxValue - minValue)}deg`,
              position: 'relative',
              display: 'flex',
              height: '100%',
              width: '100%',
              transformOrigin: 'bottom right',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              transition: 'all 1s ease-in-out' }}>
            <div
              style={{
                position: 'absolute',
                width: lineWidth * 1.2,
                height: lineWidth * 1.2,
                left: `${(-1 * (lineWidth * 0.6))}px`,
                bottom: `${(-1 * (lineWidth * 0.5) + 1)}px`,
                borderWidth: '2px',
              }}
            >
              {renderBlob ? renderBlob() : defaultRenderBlob()}
            </div>
            <div
              style={{
                position: 'absolute',
                width: '50px',
                left: value <= 50 ? '-40px' : value <= 70 ? '-50px' : '-60px',
                bottom: value <= 90 ? '0px' : '-20px',
                rotate: `${(-1 * (180 * value)) / (maxValue - minValue)}deg`,
              }}>
              {renderBlobText ? renderBlobText() : defaultRenderBlobText()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HalfAngleRadialChart
