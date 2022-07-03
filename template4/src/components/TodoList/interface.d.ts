export namespace TodoList {
  interface Item {
    id: number,
    text: string,
    isComplete: boolean,
  };

  export interface TodoItem {
    item: Item
  }
}