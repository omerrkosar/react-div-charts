
import React,{ useMemo } from 'react'

import { getAngle,getRandomColor } from '../utils'
import Cells from '../cells'
import { CellData,LineChartProps } from '../types'

const defaultRenderLineValue = (value:number) => {
  return <p>{value}</p>
}

const defaultRenderLabel = (label:string,cellWidth:number) => {
  return (
    <div key={label} style={{
      width: cellWidth,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      fontSize: '14px',
      textAlign: 'end' }}>
      {label}
    </div>
  )
}

const LineChart: React.FC<LineChartProps> = ({
  labels,
  data,
  width = 500,
  height = 300,
  cellHeight = 50,
  pointRadius = 5,
  cellColor='#e0e0e0',
  hideLineValue = false,
  hidePoint = false,
  hideCells=false,
  renderChart,
  renderLabel=defaultRenderLabel,
  renderLabels,
  renderLineValue=defaultRenderLineValue,
  renderLineContainer,
  renderLine,
  renderPoint,
}) => {

  const randomColor = useMemo(()=> getRandomColor(),[])

  const defaultRenderLine = (cellData:CellData) => {
    return (
      <div
        style={{
          borderBottom: '1px solid black',
          borderColor: cellData.color ?? randomColor,
        }}/>
    )
  }

  const defaultRenderLineContainer = (cellData:CellData,chartMaxValue:number,cellWidth:number,nextCellData:CellData) => {
    if(!nextCellData) return <React.Fragment></React.Fragment>
    const dx = cellWidth
    const pointHeight = (cellData.value / chartMaxValue) * (height - 30)
    const nextPointHeight = (nextCellData.value / chartMaxValue) * (height - 30)
    const dy = nextPointHeight - pointHeight
    const angle = getAngle(dx, dy)
    const lineLength = Math.hypot(dx,dy)

    return (
      <div

        style={{
          position: 'absolute',
          transition: 'all 1s ease-in-out',
          left: '0px',
          width: `${lineLength}px`,
          bottom: pointHeight,
          transform: `rotate(${360-angle}deg)`,
          transformOrigin: angle > 0 ? 'bottom left' : 'top left' ,
        }}
      >
        {renderLine ? renderLine(cellData) : defaultRenderLine(cellData)}

      </div>
    )
  }


  const defaultRenderLabels = (cellWidth:number) => {
    return (
      <div style={{ width ,
        height:'30px',
        marginLeft:`${-1*cellWidth}px`,
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


  const defaultRenderPoint = (cellData:CellData) => {
    return (
      <div
        style={{
          borderRadius: '50%',
          transition: 'all 1s ease-in-out',
          backgroundColor: cellData.color ?? randomColor,
          width: `${pointRadius * 2}px`,
          height: `${pointRadius * 2}px`,
        }}
      />
    )
  }
  const renderPointContainer = (cellData:CellData,chartMaxValue:number,pointLocation:'left'|'right' = 'right') => {
    const pointHeight = (cellData.value / chartMaxValue) * (height - 30)
    return (
      <div style={{
        position: 'absolute',
        [pointLocation]:-1 * pointRadius,
        bottom: pointHeight - pointRadius,
      }}>
        {!hidePoint ? (
          <React.Fragment>
            {renderPoint ? renderPoint(cellData) : defaultRenderPoint(cellData)}
          </React.Fragment>) : null}
      </div>
    )
  }

  const renderValueContainer =(cellData:CellData,chartMaxValue:number,pointLocation:'left'|'right' = 'right') => {
    const pointHeight = (cellData.value / chartMaxValue) * (height - 30)
    return (
      <div style={{
        position: 'absolute',
        [pointLocation]:-1.5 * pointRadius,
        bottom: pointHeight - pointRadius - 5,
        zIndex: 1,
      }}>
        {!hideLineValue ? (
          <React.Fragment>
            {renderLineValue ? renderLineValue(cellData.value) : defaultRenderLineValue(cellData.value)}
          </React.Fragment>) : null}

      </div>
    )
  }


  const defaultRenderChart = (data:CellData[],chartMaxValue:number,cellWidth:number,cellIndex:number,nextData?:CellData[]) => {
    if(!nextData) return <React.Fragment></React.Fragment>
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
        {data.map((d, dataIndex) => (
          <React.Fragment key={dataIndex} >
            <React.Fragment>{renderLineContainer ? renderLineContainer(d,chartMaxValue,cellWidth,nextData[dataIndex]) : defaultRenderLineContainer(d,chartMaxValue,cellWidth,nextData[dataIndex])}</React.Fragment>
            <React.Fragment>{renderPointContainer(nextData[dataIndex],chartMaxValue) }</React.Fragment>
            <React.Fragment>{renderValueContainer(nextData[dataIndex],chartMaxValue)}</React.Fragment>
            {cellIndex === 0 ? (
              <React.Fragment>
                <React.Fragment>{renderPointContainer(d,chartMaxValue,'left')}</React.Fragment>
                <React.Fragment>{renderValueContainer(d,chartMaxValue,'left')}</React.Fragment>
              </React.Fragment>
            ) : null}

          </React.Fragment>
        ))}

      </div>
    )
  }


  return (
    <div>
      <Cells
        labels={labels}
        data={data}
        width={width}
        height={height}
        cellHeight={cellHeight}
        cellColor={cellColor}
        hideCells={hideCells}
        chartType='line'
        renderChart={renderChart ?? defaultRenderChart}
        renderLabel={renderLabel}
        renderLabels={renderLabels ?? defaultRenderLabels}
      />
    </div>
  )
}

export default LineChart
