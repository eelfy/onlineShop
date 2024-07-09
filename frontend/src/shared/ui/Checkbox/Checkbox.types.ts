import { ReactNode } from "react";

export interface CheckboxOption {
  label: ReactNode;
  id: number;
  isError?: boolean
}