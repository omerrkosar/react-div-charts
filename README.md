<div class="markdown prose w-full break-words dark:prose-invert dark">
    <h1>React Div Charts</h1>
    <p>Welcome to
        <strong>React Div Charts</strong>—a lightweight and fully editable charting library designed for developers who prefer simplicity and flexibility in visualizing data. Unlike many traditional libraries that rely on complex D3.js integrations, React Div Charts is built entirely with standard HTML
        <code>&lt;div&gt;</code> elements, making it intuitive and easy to customize.
    </p>
    <p>Whether you’re creating bar charts, line charts, doughnut charts, or multi-type visualizations, our library empowers you to craft beautiful and responsive charts without the overhead of heavy dependencies. While it excels in delivering clear insights from smaller datasets, React Div Charts prioritizes interactivity and editability, allowing users to modify and manipulate chart elements seamlessly.</p>
    <p>Get started today and explore the potential of easy-to-use, flexible charting solutions tailored for your React applications!</p>
    </div>

Install it by running `npm install react-div-charts --save` or `yarn add react-div-charts`. Then to use it:

```jsx
import { LineChart } from 'react-div-charts';
```

## Examples
### Line Chart.
![Image of LineChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/line-chart.png "Line Chart")
<details>
  <summary>Show Line Chart code</summary>

  ### Line Chart

```jsx
<LineChart
    width={400}
    height={400}
    labels={['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']}
    data={[{
    label: 'Primary',
    value: [52,53,11,17,14,88,91,31,13,73,55,64],
    color:'blue',
    },
    {
    label: 'Secondary',
    value: [72,82,33,95,77,19,71,69,44,5,93,25],
    color:'red',

    }]}
/>
```
</details>

### Bar Chart.
![Image of BarChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/bar-chart.png "Bar Chart")
<details>
  <summary>Show Bar Chart code</summary>

  ### Bar Chart

```jsx
<BarChart
    width={400}
    height={400}
    data={[{
    label: 'Primary',
    value: [1,86,42,71,15,17,78,54,44,10,65,38],
    color:'blue',
    },
    {
    label: 'Secondary',
    value: [19,54,1,36,75,27,2,93,8,30,29,2],
    color:'red',
    }]}
    labels={['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']}
/>
```
</details>

### Multi Chart.
![Image of MultiChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/multi-chart.png "Multi Chart")
<details>
  <summary>Show Multi Chart code</summary>

  ### Multi Chart

```jsx
<MultiChart
    width={400}
    height={400}
    labels={['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']}
    data={[{
    label: 'Primary',
    value: [74,42,92,7,6,7,61,20,13,49,98,40],
    color:'red',
    chartType:'line',
    },
    {
    label: 'Secondary',
    value: [16,94,24,2,98,21,82,48,68,13,14,90],
    color:'yellow',
    chartType:'bar',

    }]}
/>
```
</details>

### Half Angle Radial Chart.
![Image of HalfAngleRadialChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/half-angle-radial-chart.png "Half Angle Radial Chart")
<details>
  <summary>Show Half Angle Radial Chart code</summary>

  ### Half Angle Radial Chart

```jsx
<HalfAngleRadialChart
    width={400}
    value={80}
/>
```
</details>

### Pie Chart.
![Image of PieChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/pie-chart.png "Pie Chart")
<details>
  <summary>Show Pie Chart code</summary>

  ### Pie Chart

```jsx
<PieChart
    data={[
    { value: 30, label: 'Category A', color: '#FF6384' },
    { value: 20, label: 'Category B', color: '#36A2EB' },
    { value: 50, label: 'Category C', color: '#FFCE56' },
    ]}
    width={400}
/>
```
</details>

### Doughnut Chart.
![Image of DoughnutChart Component for a simple data visualization](https://github.com/omerrkosar/react-div-charts/blob/main/public/doughnut-chart.png "Doughnut Chart")
<details>
  <summary>Show Doughnut Chart code</summary>

  ### Doughnut Chart

```jsx
<div style={{
        backgroundColor: 'white',
      }}>
    <DoughnutChart
        data={[
        { value: 30, label: 'Category A', color: '#FF6384' },
        { value: 20, label: 'Category B', color: '#36A2EB' },
        { value: 50, label: 'Category C', color: '#FFCE56' },
        ]}
        width={400}
    />
</div>
```
</details>

<div class="markdown prose w-full break-words dark:prose-invert dark">
	<p>Here’s the final version of the patch notes:</p>
	<hr>
		<h2>Patch Notes</h2>
		<h3>Version 1.1.0 (2024-10-08)</h3>
		<h4>Changes:</h4>
		<ul>
			<li>
				<strong>Breaking Change</strong>:
				<code>renderLine</code> and
				<code>renderBar</code> have been renamed to
				<code>renderLineContainer</code> and
				<code>renderBarContainer</code>.
				<ul>
					<li>
						<strong>New Behavior</strong>:
						<ul>
							<li>The new
								<code>renderLineContainer</code> and
								<code>renderBarContainer</code> handle the layout aspects of the line and bar elements, such as width, height, and positioning.
							</li>
							<li>You can now customize the style and appearance of the individual line and bar components using
								<code>renderLine</code> and
								<code>renderBar</code>. This change allows for more detailed control over the visual representation of chart elements.
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
		</div>

<div class="markdown prose w-full break-words dark:prose-invert dark">
	<hr>
		<h1>API Documentation</h1>
		<h2>
			<code>CellData</code>
		</h2>
		<p>Represents a single cell's data used in various chart types.</p>
		<ul>
			<li>
				<strong>label</strong>:
				<code>string</code> - The label for the cell.
			</li>
			<li>
				<strong>color</strong>:
				<code>string</code> - The color representing the cell.
			</li>
			<li>
				<strong>value</strong>:
				<code>number</code> - The numerical value of the cell.
			</li>
			<li>
				<strong>chartType</strong>:
				<code>'bar' | 'line'</code>
				<em>(optional)</em> - Specifies the chart type, either bar or line.
			</li>
		</ul>
		<hr>
			<h2>
				<code>PieChartProps</code>
			</h2>
			<p>Props required for rendering a Pie chart.</p>
			<ul><li><strong>data</strong>: <code>PieData[]</code> - Array of data points to be displayed in the pie chart.</li><li><strong>width</strong>: <code>number</code> - The width of the chart.</li><li><strong>hideLabels</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the labels of the pie chart.</li><li><strong>renderLabel</strong>: <code>(d: PieData) =&gt; React.ReactNode</code> <em>(default: defaultRenderLabel)</em> - Custom render function for labels.</li></ul>
			<hr>
				<h2>
					<code>DoughnutChartProps</code>
				</h2>
				<p>Props required for rendering a Doughnut chart.</p>
				<ul><li><strong>data</strong>: <code>PieData[]</code> - Array of data points to be displayed in the doughnut chart.</li><li><strong>width</strong>: <code>number</code> - The width of the chart.</li><li><strong>hideCenter</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the center section of the chart.</li><li><strong>hideLabels</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the labels of the doughnut chart.</li><li><strong>renderCenter</strong>: <code>() =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the center of the doughnut.</li><li><strong>renderLabel</strong>: <code>(d: PieData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for labels.</li></ul>
				<hr>
					<h2>
						<code>PieData</code>
					</h2>
					<p>Represents a single data point in a pie or doughnut chart.</p>
					<ul>
						<li>
							<strong>value</strong>:
							<code>number</code> - The value of the data point.
						</li>
						<li>
							<strong>label</strong>:
							<code>string</code> - The label of the data point.
						</li>
						<li>
							<strong>color</strong>:
							<code>string</code> - The color of the data point.
						</li>
					</ul>
					<hr>
						<h2>
							<code>ChartData</code>
						</h2>
						<p>Represents a dataset for a chart with multiple values.</p>
						<ul>
							<li>
								<strong>label</strong>:
								<code>string</code>
								<em>(optional)</em> - The label for the dataset.
							</li>
							<li>
								<strong>value</strong>:
								<code>number[]</code> - Array of values for the dataset.
							</li>
							<li>
								<strong>color</strong>:
								<code>string</code> - The color representing the dataset.
							</li>
							<li>
								<strong>chartType</strong>:
								<code>'bar' | 'line'</code>
								<em>(optional)</em> - Specifies whether the dataset is for a bar or line chart.
							</li>
						</ul>
						<hr>
							<h2>
								<code>CellsProps</code>
							</h2>
							<p>Props used for rendering cells in various charts.</p>
							<ul><li><strong>labels</strong>: <code>string[]</code> - Array of labels for each cell.</li><li><strong>data</strong>: <code>ChartData[]</code> - Array of data corresponding to each cell.</li><li><strong>width</strong>: <code>number</code> - The width of the chart.</li><li><strong>height</strong>: <code>number</code> - The height of the chart.</li><li><strong>cellHeight</strong>: <code>number</code> - The height of each cell.</li><li><strong>chartType</strong>: <code>'bar' | 'line'</code> <em>(default: 'bar')</em> - Specifies the chart type for rendering cells.</li><li><strong>cellColor</strong>: <code>string</code> <em>(default: '#e0e0e0')</em> - Overrides the default color of the cells.</li><li><strong>hideCells</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the cells.</li><li><strong>renderChart</strong>: <code>(data: CellData[], chartMaxValue: number, cellWidth: number, index: number, nextData?: CellData[]) =&gt; React.ReactNode</code> <em>(default: () =&gt; &lt;&gt;&lt;/&gt;)</em> - Custom render function for the chart.</li><li><strong>renderLabel</strong>: <code>(label: string, cellWidth: number) =&gt; React.ReactNode</code> <em>(default: defaultRenderLabel)</em> - Custom render function for labels.</li><li><strong>renderValueLabel</strong>: <code>(valueLabel: number) =&gt; React.ReactNode</code> <em>(default: defaultRenderValueLabel)</em> - Custom render function for rendering value labels.</li><li><strong>renderLabels</strong>: <code>(cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for rendering multiple labels.</li></ul>
							<hr>
								<h2>
									<code>BarChartProps</code>
								</h2>
								<p>Props required for rendering a bar chart.</p>
								<ul><li><strong>labels</strong>: <code>string[]</code> - Array of labels for the bar chart.</li><li><strong>data</strong>: <code>ChartData[]</code> - Array of data points for the bar chart.</li><li><strong>width</strong>: <code>number</code> <em>(default: 500)</em> - The width of the chart.</li><li><strong>height</strong>: <code>number</code> <em>(default: 300)</em> - The height of the chart.</li><li><strong>cellHeight</strong>: <code>number</code> <em>(default: 50)</em> - The height of each cell in the chart.</li><li><strong>cellColor</strong>: <code>string</code> <em>(default: '#e0e0e0')</em> - Color of the cells in the chart.</li><li><strong>hideBarValue</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the values for each bar.</li><li><strong>hideCells</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the cells in the chart.</li><li><strong>renderChart</strong>: <code>(data: CellData[], chartMaxValue: number, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the chart.</li><li><strong>renderBarValue</strong>: <code>(value: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for bar values.</li><li><strong>renderBarContainer</strong>: <code>(value: CellData, chartMaxValue: number, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the bar container.</li><li><strong>renderBar</strong>: <code>(value: CellData, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for each bar.</li><li><strong>renderLabel</strong>: <code>(label: string, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for labels.</li><li><strong>renderLabels</strong>: <code>(cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for multiple labels.</li></ul>
								<hr>
									<h2>
										<code>LineChartProps</code>
									</h2>
									<p>Props required for rendering a line chart.</p>
									<ul><li><strong>labels</strong>: <code>string[]</code> - Array of labels for the line chart.</li><li><strong>data</strong>: <code>ChartData[]</code> - Array of data points for the line chart.</li><li><strong>width</strong>: <code>number</code> <em>(default: 500)</em> - The width of the chart.</li><li><strong>height</strong>: <code>number</code> <em>(default: 300)</em> - The height of the chart.</li><li><strong>cellHeight</strong>: <code>number</code> <em>(default: 50)</em> - The height of each cell in the chart.</li><li><strong>pointRadius</strong>: <code>number</code> <em>(default: 5)</em> - The radius of the points on the line.</li><li><strong>cellColor</strong>: <code>string</code> <em>(default: '#e0e0e0')</em> - Color of the cells in the chart.</li><li><strong>hideLineValue</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the values for each point on the line.</li><li><strong>hidePoint</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the points on the line.</li><li><strong>hideCells</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the cells in the chart.</li><li><strong>renderChart</strong>: <code>(data: CellData[], chartMaxValue: number, cellWidth: number, index: number, nextData?: CellData[]) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the chart.</li><li><strong>renderLineValue</strong>: <code>(value: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for line values.</li><li><strong>renderLineContainer</strong>: <code>(value: CellData, chartMaxValue: number, cellWidth: number, nextData?: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the line container.</li><li><strong>renderLine</strong>: <code>(value: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the line.</li><li><strong>renderPoint</strong>: <code>(cellData: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for points.</li><li><strong>renderLabel</strong>: <code>(label: string, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for labels.</li><li><strong>renderLabels</strong>: <code>(cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for multiple labels.</li></ul>
									<hr>
										<h2>
											<code>MultiChartProps</code>
										</h2>
										<p>Props used for rendering multiple chart types, such as bar and line charts, together.</p>
										<ul><li><strong>labels</strong>: <code>string[]</code> - Array of labels for the multi-chart.</li><li><strong>data</strong>: <code>ChartData[]</code> - Array of data points for the multi-chart.</li><li><strong>width</strong>: <code>number</code> <em>(default: 500)</em> - The width of the chart.</li><li><strong>height</strong>: <code>number</code> <em>(default: 300)</em> - The height of the chart.</li><li><strong>cellHeight</strong>: <code>number</code> <em>(default: 50)</em> - The height of each cell in the chart.</li><li><strong>cellColor</strong>: <code>string</code> <em>(default: '#e0e0e0')</em> - Color of the cells in the chart.</li><li><strong>pointRadius</strong>: <code>number</code> <em>(default: 5)</em> - The radius of the points on the line.</li><li><strong>hideBarValue</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the values for each bar.</li><li><strong>hideLineValue</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the values for each point on the line.</li><li><strong>hidePoint</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the points on the line.</li><li><strong>hideCells</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the cells in the chart.</li><li><strong>renderChart</strong>: <code>(data: CellData[], chartMaxValue: number, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the entire chart.</li><li><strong>renderLabel</strong>: <code>(label: string, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for a label.</li><li><strong>renderLabels</strong>: <code>(cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for multiple labels.</li><li><strong>renderBarValue</strong>: <code>(value: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for bar values.</li><li><strong>renderBarContainer</strong>: <code>(value: CellData, chartMaxValue: number, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the bar container.</li><li><strong>renderBar</strong>: <code>(value: CellData, cellWidth: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the bar.</li><li><strong>renderLineValue</strong>: <code>(value: number) =&gt; React.ReactNode</code> <em>(default: defaultRenderLineValue)</em> - Custom render function for line values.</li><li><strong>renderLineContainer</strong>: <code>(value: CellData, chartMaxValue: number, cellWidth: number, nextData?: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the line container.</li><li><strong>renderLine</strong>: <code>(value: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the line.</li><li><strong>renderPoint</strong>: <code>(cellData: CellData) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for points.</li></ul>
										<hr>
											<h2>
												<code>HalfAngleRadialChartProps</code>
											</h2>
											<p>Props used for rendering a half-angle radial chart.</p>
											<ul><li><strong>value</strong>: <code>number</code> - The value to be displayed on the bar chart.</li><li><strong>width</strong>: <code>number</code> <em>(default: 256)</em> - The width of the chart.</li><li><strong>lineWidth</strong>: <code>number</code> <em>(default: 20)</em> - The width of the lines on the chart.</li><li><strong>minValue</strong>: <code>number</code> <em>(default: 0)</em> - The minimum value for the chart.</li><li><strong>maxValue</strong>: <code>number</code> <em>(default: 100)</em> - The maximum value for the chart.</li><li><strong>iconSize</strong>: <code>number</code> <em>(default: 50)</em> - The size of the icon displayed on the chart.</li><li><strong>hideBlob</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the blob (central part) of the chart.</li><li><strong>hideBlobText</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the text inside the blob.</li><li><strong>hidePointer</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the pointer in the chart.</li><li><strong>hideMinMax</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the min and max value labels.</li><li><strong>hideInnerCircularLine</strong>: <code>boolean</code> <em>(default: false)</em> - If <code>true</code>, hides the inner circular line in the chart.</li><li><strong>color</strong>: <code>string</code> <em>(default: '#b71c1c')</em> - The color of the bar chart.</li><li><strong>exceptionColor</strong>: <code>string</code> <em>(default: '#e0e0e0')</em> - The color to be used for exception values.</li><li><strong>renderBlob</strong>: <code>() =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the blob.</li><li><strong>renderBlobText</strong>: <code>() =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the blob text.</li><li><strong>renderPointer</strong>: <code>() =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the pointer.</li><li><strong>renderMinMax</strong>: <code>(value: number) =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the min and max values.</li><li><strong>renderInnerCircularLine</strong>: <code>() =&gt; React.ReactNode</code> <em>(optional)</em> - Custom render function for the inner circular line.</li></ul>
											<hr>
											</div>
