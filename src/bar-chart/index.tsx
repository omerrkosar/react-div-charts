
import React,{ useMemo } from 'react'

import { getRandomColor } from '../utils'
import Cells from '../cells'
import { BarChartProps,CellData } from '../types'

const BarChart: React.FC<BarChartProps> = ({
  labels,
  data,
  width = 500,
  height = 300,
  cellHeight = 50,
  cellColor='#e0e0e0',
  hideBarValue = false,
  hideCells=false,
  renderChart,
  renderLabel,
  renderLabels,
  renderBarValue,
  renderBar,
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


  const defaultRenderChart = (data:CellData[],chartMaxValue:number,cellWidth:number) => {
    return (
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
        }} >
          {data.map((d, index) => (
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

export default BarChart
