
import React,{ useMemo } from 'react'

import { getAngle,getRandomColor } from '../utils'
import Cells from '../cells'
import { CellData,MultiChartProps } from '../types'

const defaultRenderLineValue = (value:number) => {
  return <p>{value}</p>
}

const MultiChart: React.FC<MultiChartProps> = ({
  labels,
  data,
  width = 500,
  height = 300,
  cellHeight = 50,
  cellColor='#e0e0e0',
  pointRadius = 5,
  hideBarValue = false,
  hideLineValue = false,
  hidePoint = false,
  hideCells=false,
  renderChart,
  renderLabel,
  renderLabels,
  renderBarValue,
  renderBar,
  renderLineValue=defaultRenderLineValue,
  renderLine,
  renderPoint,
}) => {

  const randomColor = useMemo(()=> getRandomColor(),[])

  const defaultRenderBarValue = (value:number) => {
    return <div style={{
      position: 'absolute',
      top: '-20px',
      left: 'calc(50% - 8px)',
    }}>{value}</div>
  }
  const defaultRenderBar = (cellData:CellData,chartMaxValue:number,cellWidth:number) => {
    return (
      <div

        style={{
          display: 'block',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          transition: 'all 1s ease-in-out',
          width: cellWidth * 0.6 / data.length,
          height: (cellData.value / chartMaxValue) * (height - 30),
          backgroundColor: cellData.color ?? randomColor,
        }}
      />
    )
  }

  const renderValueContainer =(cellData:CellData,chartMaxValue:number,cellWidth:number) => {
    const pointHeight = (cellData.value / chartMaxValue) * (height - 30)
    return (
      <div style={{
        position: 'absolute',
        left:-1.5 * pointRadius + cellWidth / 2,
        bottom: pointHeight - pointRadius - 5,
        zIndex: 1,
      }}>
        {!hideLineValue ? (
          <React.Fragment>
            {renderLineValue(cellData.value)}
          </React.Fragment>) : null}

      </div>
    )
  }

  const renderPointContainer = (cellData:CellData,chartMaxValue:number,cellWidth:number) => {
    const pointHeight = (cellData.value / chartMaxValue) * (height - 30)
    return (
      <div style={{
        position: 'absolute',
        bottom: pointHeight - pointRadius,
        left: -1 * pointRadius + cellWidth / 2,
        zIndex: 1,
      }}>
        {!hidePoint ? (
          <React.Fragment>{renderPoint ? renderPoint(cellData) : defaultRenderPoint(cellData)}</React.Fragment>
        ) : null}

      </div>
    )
  }

  const defaultRenderPoint = (cellData:CellData) => {
    return (
      <div
        style={{
          transition: 'all 1s ease-in-out',
          backgroundColor: cellData.color ?? randomColor,
          width: `${pointRadius * 2}px`,
          height: `${pointRadius * 2}px`,
          borderRadius: '50%',
        }}
      />
    )
  }

  const defaultRenderLine = (cellData:CellData,chartMaxValue:number,cellWidth:number,nextCellData:CellData) => {
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
          zIndex: 1,
          borderBottom: '1px solid black',
          width: `${lineLength}px`,
          left:cellWidth / 2,
          bottom: pointHeight,
          borderColor: cellData.color ?? randomColor,
          transform: `rotate(${360-angle}deg)`,
          transformOrigin: angle > 0 ? 'bottom left' : 'top left' ,
        }}
      />
    )
  }


  const defaultRenderChart = (data:CellData[],chartMaxValue:number,cellWidth:number,_:number,nextData?:CellData[]) => {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
        {data.filter(d=>d.chartType==='line').map((d, index) => (
          <React.Fragment key={index} >


            {nextData ? (
              <React.Fragment>{renderLine ? renderLine(d,chartMaxValue,cellWidth,nextData[index]) : defaultRenderLine(d,chartMaxValue,cellWidth,nextData[index])}</React.Fragment>
            ) :null}

            <React.Fragment>{renderPointContainer(d,chartMaxValue,cellWidth) }</React.Fragment>
            <React.Fragment>{renderValueContainer(d,chartMaxValue,cellWidth) }</React.Fragment>
          </React.Fragment>
        ))}
        <div style={{
          paddingLeft: '5px',
          paddingRight: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          gap: '5px',
        }}>
          <div style={{
            gap: `${width / 100}px`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            height: '100%',
          }}>
            {data.filter(d=>d.chartType==='bar').map((d, index) => (
              <React.Fragment key={index} >
                <div style={{
                  position: 'relative',
                }}>
                  {hideBarValue ? null : (
                    <React.Fragment>{ renderBarValue ? renderBarValue(d.value) : defaultRenderBarValue(d.value) }</React.Fragment>
                  )}
                  {renderBar ? renderBar(d,chartMaxValue,cellWidth) : defaultRenderBar(d,chartMaxValue,cellWidth)}
                </div>

              </React.Fragment>
            ))}
          </div>

        </div>
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
        renderChart={renderChart ?? defaultRenderChart}
        renderLabel={renderLabel}
        renderLabels={renderLabels}
      />
    </div>
  )
}

export default MultiChart
