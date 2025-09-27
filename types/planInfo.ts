export interface PlanInfo {
  id?: string;
  name: string;
  badge?: string;
  currentPrice: number;
  originalPrice?: number;
  features: string[];
  highlight?: boolean;
  cardVariant: 'base' | 'bright' | 'gradient';
}
