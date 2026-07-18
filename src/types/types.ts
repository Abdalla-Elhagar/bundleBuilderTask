export interface productsType {
  id: number;
  name: string;
  description: string;
  discount: number | null;
  image: string;
  colors?: { name: string; image: string; selected: boolean }[] | [];
  quantity: number;
  price: number;
  category: string;
  isRequired: boolean;
  require?: boolean;
}

export interface stepsType {
  stepNumber: number;
  stepTitle: string;
  stepIcon: string;
  active: boolean;
  productsId?: number[];
}
