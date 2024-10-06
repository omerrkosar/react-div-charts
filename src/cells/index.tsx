import React,{ useMemo } from 'react'

import { getLength } from '../utils'
import { CellData,CellsProps } from '../types'

const defaultRenderLabel = (label:string,cellWidth:number) => {
  return (
    <div key={label} style={{
      width: cellWidth,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      textAlign: 'end' }}>
      {label}
    </div>
  )
}

const defaultRenderValueLabel = (valueLabel:number) => {
  return (
    <span>{valueLabel}</span>
  )
}


const Cells: React.FC<CellsProps> = ({
  data,
  labels,
  width,
  height,
  cellHeight,
  chartType = 'bar',
  cellColor='#e0e0e0',
  hideCells=false,
  renderChart=()=><React.Fragment></React.Fragment>,
  renderLabel=defaultRenderLabel,
  renderValueLabel=defaultRenderValueLabel,
  renderLabels,
}) => {
  const allDataArray = useMemo(() => data.map(d => d.value).flat(), [data])
  const maxValue = Math.max(...allDataArray)
  const minValue = 0
  const cellWidth = chartType === 'bar' ? width / labels.length : width / (labels.length - 1)

  const digitMultiplier = (getLength(maxValue-minValue) - 1) * 10

  const minValueLabel = Math.floor(minValue/digitMultiplier)*digitMultiplier

  const maxValueLabel = Math.ceil(maxValue/digitMultiplier)* (digitMultiplier * 1.1)

  const cellCount = Math.ceil((height-30) / cellHeight)

  const valueLabelMultiplier = (maxValueLabel-minValueLabel)/cellCount
  const valueLabelArray = Array.from({ length:cellCount+1 },(_,k)=>Math.round(minValueLabel + (k*valueLabelMultiplier)))
  const chartMaxValue = valueLabelArray[valueLabelArray.length-1]


  const defaultRenderLabels = (cellWidth:number) => {
    return (
      <div style={{ width ,
        height:'30px',
        marginLeft:`${-1*cellWidth/2}px`,
        display: 'flex',
        paddingLeft: '0px',
        paddingTop: '0px',
        gap: '11px',
      }}>
        {labels.map((label) => (
          <div
            key={label}
            style={{
              width: cellWidth-11,
              display: 'flex',
              alignItems:  'flex-end',
              transform: 'rotate(300deg)',
              transformOrigin:'top right',
              transition:'all 1s ease-in-out',
            }}>
            {renderLabel(label,cellWidth)}
          </div>
        ))}
      </div>
    )
  }


  return (
    <div>
      <div style={{
        display: 'flex',
        gap: '10px',
      }}>
        <div style={{
          height:height-30,
          gap:`${(height-30) / cellCount}px`,
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
        }}>
          {valueLabelArray.map((valueLabel,index)=>{
            return (
              <div  key={valueLabel}  style={{
                position: 'relative',
              }}>
                {![0,valueLabelArray.length-1].includes(index) ? (
                  <div style={{
                    width:width,
                    borderBottom:hideCells ? 'none' : `1px solid ${cellColor}`,
                    position: 'absolute',
                    bottom: '0',
                    left: '12px',
                  }} />
                ) : null}

                <div style={{ position:'absolute',right:'0px',height: cellCount }}>
                  {renderValueLabel(valueLabel)}
                </div>
              </div>
            )
          })}
        </div>
        <div style={{
          width:width,
          height:height-30,
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
          border: `1px solid ${cellColor}`,
          paddingLeft: '0px',
          paddingRight: '0px' } as React.CSSProperties}>
          {labels.map((label, index) => (
            <React.Fragment key={label}>
              {chartType !== 'line' || index!==labels.length - 1  ? (
                <div key={label}
                  style={{
                    height: '100%',
                    width: cellWidth - 1,
                    borderLeft:hideCells || index===0 ? 'none' : `1px solid ${cellColor}`,
                    '--cellColor':cellColor,
                  } as React.CSSProperties}>
                  {renderChart(data.map(d=>({ value:d.value[index],color:d.color,label,chartType:d.chartType }) as CellData),chartMaxValue,cellWidth,index,data.map(d=>({ value:d.value[index+1],color:d.color,label,chartType:d.chartType }) as CellData))}
                </div>
              ) : null}

            </React.Fragment>


          ))}
        </div>

      </div>
      {renderLabels ? renderLabels(cellWidth) : defaultRenderLabels(cellWidth)}
    </div>
  )
}

export default Cells
