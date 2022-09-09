import { Light } from "../light/Light"

export type Params<T> = {
  cols: number,
  rows: number,
  factory: () => T;
}

export class Grid<T> {
  state: unknown[][];

  constructor({rows, cols, factory}: Params<T>) {
    const state: unknown[][] = [];
    
    for (let y = 0; y < cols; y++) {
      const col: unknown[] = []

      for (let x = 0; x < rows; x++) {
        const item = factory();
        col.push(item);
      }

      state.push(col);
    }

    this.state = state;
  }
}
