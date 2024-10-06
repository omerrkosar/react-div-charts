import React from 'react'

import { getRandomColor } from '../utils'
import { PieChartProps,PieData } from '../types'


const defaultRenderLabel = (d:PieData) => {
  return <span>{d.label}</span>
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  width,
  hideLabels = false,
  renderLabel=defaultRenderLabel,
}) => {
  const total = data.reduce((acc, { value }) => acc + value, 0)
  const degreeArray = data.map(({ value }) => (value / total) * 360)
  const rotateArray = degreeArray.reduce((acc, degree) => {
    acc.push(acc[acc.length - 1] + degree)
    return acc
  }, [0])


  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'inherit',
      position:'relative',
      width,
      height:width,
    }}>
      {data.map((d, index) => (
        <div
          key={d.label}
          style={{
            position:'absolute',
            borderRadius: '50%',
            left:0,
            top:0,
            background: `conic-gradient(${d.color ?? getRandomColor()} ${degreeArray[index]}deg, transparent 0)`,
            transformOrigin: 'center',
            width,
            height:width,
            '--color': d.color ?? getRandomColor(),
            '--angle': `${degreeArray[index]}deg`,
            transform: `rotate(${rotateArray[index]}deg)`,
          } as React.CSSProperties}>
          <div style={{
            display: 'inline-block',
            transform: `rotate(${-1* rotateArray[index]}deg)`,
            transformOrigin: 'center',
          }}>{hideLabels ? null : (<React.Fragment>
              {renderLabel(d)}
            </React.Fragment>)} </div>
        </div>
      ))}

    </div>
  )
}

export default PieChart
