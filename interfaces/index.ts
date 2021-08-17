export interface RenderItemProps {
  id: number;
  icon: any;
  name: string;
  color: string;
  expenses: {
    id: number;
    title: string;
    description: string;
    location: string;
    total: number;
    status: string;
  }[];
}

export interface RenderItemExpenseProps {
  id: number;
  title: string;
  description: string;
  location: string;
  total: number;
  status: string;
}
