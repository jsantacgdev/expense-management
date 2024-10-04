export interface IChart {
  label: Array<string>;
  data: Array<number>;
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
}

export interface IChartData {
  labels: Array<string>;
  datasets: Array<IChart>;
}
