import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSubmitForm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('https://external-api.com/submit', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Failed to submit');
      return response.json();
    },
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
}
