export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const name: string | undefined = body.name;
  const res = getQuery(event);
  const id = res.id;
  return { message: `Hello, ${name} with id ${id} ! This is a post event` };
});