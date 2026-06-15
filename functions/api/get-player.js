export async function onRequestPost(context) {
  const { access_token } = await context.request.json();

  const response = await fetch("https://discord.com/api/v10/users/@me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
