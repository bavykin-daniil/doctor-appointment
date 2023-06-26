export type SelectOption<TValue extends string | number = string> = {
  id: string;
  name: string;
  value: TValue;
};
