export interface IComposer {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
  period?: string;

  // for demonstration purposes
/*   computeMonthlySalary(annualSalary: number): number; */
}

// for demonstration purposes
/* export class Composer implements IComposer {
  constructor(
    public code: string,
    public name: string,
    public gender: string,
    public annualSalary: number,
    public dateOfBirth: string
  ) {}

  computeMonthlySalary(annualSalary: number): number {
    return annualSalary / 12;
  }
}
 */
