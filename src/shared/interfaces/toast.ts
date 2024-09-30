import type { ToastMessageOptions } from "primevue/toast";

export interface IToastMsg {
  ts: number;
  id: string;
  msg: ToastMessageOptions;
}
