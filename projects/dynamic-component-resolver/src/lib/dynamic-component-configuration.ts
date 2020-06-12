export class DynamicComponentConfiguration {
  id: string;
  tag: string;
  startCol: number;
  endCol: number;
  row: number;

  childComponents: DynamicComponentConfiguration[];

  constructor(id: string, tag: string, startCol: number, endCol: number, row: number) {
    this.childComponents = [];
    this.id = id;
    this.tag = tag;
    this.startCol = startCol;
    this.endCol = endCol;
    this.row = row;
  }

}
