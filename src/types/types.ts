export interface productsType {
  id: number;
  name: string;
  description: string;
  discount: number | null;
  image: string;
  colors?: { name: string; image: string }[] | [];
  price: number;
  category: string;
  isRequired: boolean;
  require?: boolean;
  selectedColor: string | null;
}

export interface stepsType {
  stepNumber: number;
  stepTitle: string;
  stepIcon: string;
  active: boolean;
  category?: string;
}

export interface cartType {
  id: number;
  name: string;
  category: string;
  quantity: number;
  image: string;
  discount: number | null;
  price: number;
  selectedColor: string | null;
}
