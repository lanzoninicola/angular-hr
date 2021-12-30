export interface User {
  id: string;
  firstname: string;
  lastname: string;
  companyRole: string;
  disabled: boolean;
}

export type Users = User[];
