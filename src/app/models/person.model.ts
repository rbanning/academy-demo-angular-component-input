export interface IPerson {
  name: string;
  favorite: {
    color?: string;
    food: string;
  },
  friends: string[];
  username: string;
  awesome?: boolean;
  likes?: number;
}