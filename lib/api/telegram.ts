import { UserInfo } from '@/types/userInfo';

export async function sendTelegramMessage(data: UserInfo) {
  const response = await fetch('/api/telegram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send message');
  }

  return response.json();
}
