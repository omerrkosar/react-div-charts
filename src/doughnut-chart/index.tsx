import React from 'react'

import Pie from '../pie-chart'
import { DoughnutChartProps } from '../types'


const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  width,
  hideCenter = false,
  hideLabels = false,
  renderCenter,
  renderLabel,
}) => {
  const total = data.reduce((acc, { value }) => acc + value, 0)

  const defaultRenderCenter = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        Total:{total}
      </div>
    )

  }

  return (
    <div style={{
      position:'relative',
      backgroundColor:'inherit',
      width,
      height:width,
    }}>
      <Pie data={data} width={width} hideLabels={hideLabels} renderLabel={renderLabel} />
      <div style={{
        width: width / 2,
        height: width / 2,
        borderRadius: '50%',
        backgroundColor: 'inherit',
        position: 'absolute',
        top: width / 4,
        left: width / 4,
      }}
      >{hideCenter ? null : (<React.Fragment>
          {renderCenter ? renderCenter() : defaultRenderCenter()}
        </React.Fragment>)}</div>
    </div>
  )
}

export default DoughnutChart
