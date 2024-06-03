// app/api/subscribe.js

export async function POST(request: Request) {
	const { email } = await request.json();

	if (!email)
		return new Response(
			JSON.stringify({ error: { title: "Oh my, we need an email" } }),
			{
				status: 400,
			}
		);

	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const AUDIENCE_ID = process.env.NEXT_PUBLIC_AUDIENCE_ID;
	const SERVER_PREFIX = process.env.NEXT_PUBLIC_API_SERVER; // e.g., us1

	const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email_address: email,
			status: "subscribed",
		}),
	};
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			// Convert non-2xx HTTP responses into errors
			const error = await response.json();
			return new Response(JSON.stringify({ error }), { status: response.status });
		}
		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to subscribe." }), {
			status: 500,
		});
	}
}
