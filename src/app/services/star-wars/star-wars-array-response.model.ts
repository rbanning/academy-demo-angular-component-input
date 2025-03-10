export interface IStarWarsArrayResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}