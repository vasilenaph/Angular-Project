import { User } from './user';

export interface CarRentalTheme {
  subscribers: string[];
  _id: string;
  carName: string;
  userId: User;
  __v: number;
}

export interface Car {
  _id: string;
  carName: string;
  carModel: string;
  imageUrl: string;
  color: string;
  year: string;
  engine: string;
  fuel: string;
  description: string;
  rentalPrice: number;
  available: boolean;
  renters: User[];
}
