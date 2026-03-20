export async function POST(req) {
  const { text } = await req.json();

  return new Response(JSON.stringify({ result: text }), {
    status: 200
  });
}