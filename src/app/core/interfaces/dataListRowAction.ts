export interface DataListRowActionPayload {
  action: string;
  payload: any;
}

export interface DataListRowAction {
  name: string;
  label: string;
  tooltip?: string;
}
