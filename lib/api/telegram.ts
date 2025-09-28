import { UserInfo } from '@/types/userInfo';

export const sendTelegramMessage = async (
  data: UserInfo,
  planId: string | undefined,
  planName: string | undefined,
) => {
  const response = await fetch('/api/telegram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, planId, planName }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send message');
  }

  return response.json();
};
