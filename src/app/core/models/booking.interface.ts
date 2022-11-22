export interface Booking {
  id: string;
  tripId: string;
  customerEmail: string;
  gender: string;
  seats: number;
  premiumFood: boolean;
  paymentMethod: string;
  date: string;
  status: string;
}
