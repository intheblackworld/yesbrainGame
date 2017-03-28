import React from 'react'
import { Doughnut, Radar } from 'react-chartjs-2'
import Chart from 'chart.js';
import { merge } from 'lodash'
import { DoughnutData, RadarData } from '../../lib/chart'

console.log(Chart.defaults)
Chart.defaults.global.defaultFontSize = 28
merge(Chart.defaults, {
    global: {
        defaultFontSize: 28,
        radar: {
            scaleFontSize: 16,
        },
    },
})

export default class Statistic extends React.Component {
  state = {

  }


  render () {
    return (
      <div>
        <Doughnut data={DoughnutData} />
        <Radar data={RadarData} />
      </div>
    )
  }
}
