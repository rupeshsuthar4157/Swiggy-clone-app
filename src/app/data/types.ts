
export interface Product {
  id: number;
  name: string;
  price: string | number;
  originalPrice?: string | number;
  discount: number;
  showadd?: boolean;
  image?: string; // made optional
  video?: string;
}
