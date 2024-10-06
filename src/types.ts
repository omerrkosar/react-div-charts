
export interface CellData {
    label:string;
    color:string;
    value:number;
    chartType?: 'bar' | 'line';
}

export interface PieChartProps {
    data: PieData[];
    width: number;
    hideLabels?:boolean;
    renderLabel?:(d:PieData)=>React.ReactNode;

}

export interface DoughnutChartProps {
    data: PieData[];
    width: number;
    hideLabels?:boolean;
    hideCenter?:boolean;
    renderCenter?:()=>React.ReactNode;
    renderLabel?:(d:PieData)=>React.ReactNode;

}

export interface PieData {
    value:number;
    label:string;
    color:string;
}

export interface ChartData {
    label?: string;
    value: number[];
    color:string;
    chartType?: 'bar' | 'line';
}

export interface CellsProps {
    labels:string[];
    data: ChartData[];
    cellHeight: number;
    width: number;
    height: number;
    hideCells?:boolean;
    cellColor?: string;
    chartType?: 'bar' | 'line';
    renderChart?:(data:CellData[],chartMaxValue:number,cellWidth:number,index:number,nextData?:CellData[])=>React.ReactNode;
    renderLabel?:(label:string,cellWidth:number)=>React.ReactNode;
    renderLabels?:(cellWidth:number)=>React.ReactNode;
    renderValueLabel?:(valueLabel:number)=>React.ReactNode;
}


export interface BarChartProps {
    labels:string[];
    data: ChartData[];
    cellHeight?: number;
    width?: number;
    height?: number;
    cellColor?: string;
    hideBarValue?: boolean;
    hideCells?:boolean;
    renderChart?:(data:CellData[],chartMaxValue:number,cellWidth:number) => React.ReactNode;
    renderBarValue?:(value:number)=>React.ReactNode;
    renderBar?:(value:CellData,chartMaxValue:number,cellWidth:number)=>React.ReactNode;
    renderLabel?:(label:string,cellWidth:number)=>React.ReactNode;
    renderLabels?:(cellWidth:number)=>React.ReactNode;
}

export interface LineChartProps {
    labels:string[];
    data: ChartData[];
    cellHeight?: number;
    width?: number;
    height?: number;
    pointRadius?: number;
    cellColor?: string;
    hideLineValue?: boolean;
    hidePoint?: boolean;
    hideCells?:boolean;
    renderChart?:(data:CellData[],chartMaxValue:number,cellWidth:number,index:number,nextData?:CellData[]) => React.ReactNode;
    renderLineValue?:(value:number)=>React.ReactNode;
    renderLine?:(value:CellData,chartMaxValue:number,cellWidth:number,nextData?:CellData)=>React.ReactNode;
    renderPoint?:(cellData:CellData)=>React.ReactNode;
    renderLabel?:(label:string,cellWidth:number)=>React.ReactNode;
    renderLabels?:(cellWidth:number)=>React.ReactNode;
}

export interface MultiChartProps {
    labels:string[];
    data: ChartData[];
    cellHeight?: number;
    width?: number;
    height?: number;
    pointRadius?: number;
    cellColor?: string;
    hideBarValue?: boolean;
    hidePoint?: boolean;
    hideLineValue?: boolean;
    hideCells?:boolean;
    renderChart?:(data:CellData[],chartMaxValue:number,cellWidth:number) => React.ReactNode;
    renderLineValue?:(value:number)=>React.ReactNode;
    renderLine?:(value:CellData,chartMaxValue:number,cellWidth:number,nextData?:CellData)=>React.ReactNode;
    renderBarValue?:(value:number)=>React.ReactNode;
    renderBar?:(value:CellData,chartMaxValue:number,cellWidth:number)=>React.ReactNode;
    renderPoint?:(cellData:CellData)=>React.ReactNode;
    renderLabel?:(label:string,cellWidth:number)=>React.ReactNode;
    renderLabels?:(cellWidth:number)=>React.ReactNode;
}

export interface HalfAngleRadialChartProps {
    width?: number;
    value: number;
    lineWidth?: number;
    minValue?:number;
    maxValue?:number;
    iconSize?: number;
    hideBlob?: boolean;
    hideBlobText?: boolean;
    hidePointer?: boolean;
    hideMinMax?: boolean;
    hideInnerCircularLine?: boolean;
    color?: string;
    exceptionColor?: string;
    renderBlob?:()=>React.ReactNode;
    renderBlobText?:()=>React.ReactNode;
    renderPointer?:()=>React.ReactNode;
    renderMinMax?:(value:number)=>React.ReactNode;
    renderInnerCircularLine?:()=>React.ReactNode;

}
