import { GraphQLClient } from 'graphql-request';
import { PlanInfo } from '@/types/planInfo';

const graphqlClient = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  },
});

interface DatoCMSPlanResponse {
  allPlans: Array<{
    id: string;
    name: string;
    badge?: string;
    currentPrice: number;
    originalPrice?: number;
    features: Array<{
      id: string;
      text: string;
    }>;
    highlight?: boolean;
    cardVariant: 'base' | 'bright' | 'gradient';
  }>;
}

export const datoCMSApi = {
  getAllPlans: async (): Promise<PlanInfo[]> => {
    const query = `
      query  {
        allPlans (orderBy: _createdAt_ASC) {
          id
          name
          badge
          currentPrice
          originalPrice
          features {
            id
            text
          }
          highlight
          cardVariant
        }
      }
    `;

    const data = await graphqlClient.request<DatoCMSPlanResponse>(query);

    return data.allPlans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      badge: plan.badge,
      currentPrice: plan.currentPrice,
      originalPrice: plan.originalPrice,
      features: plan.features.map(
        (feature: { id: string; text: string }) => feature.text,
      ),
      highlight: plan.highlight || false,
      cardVariant: plan.cardVariant,
    }));
  },
};
