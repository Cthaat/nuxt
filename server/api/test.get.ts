import { useStorage } from '#imports';

export default defineEventHandler(async () => {
  await useStorage().setItem('key', 'value');
  const value = await useStorage().getItem('key');
  return { message: value };
});