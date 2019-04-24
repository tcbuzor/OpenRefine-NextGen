export interface IPreference {
  id?: number;
  name?: string;
  value?: string;
}

export class Country implements IPreference {
  constructor(public id?: number, public name?: string, public value?: string) {}
}
