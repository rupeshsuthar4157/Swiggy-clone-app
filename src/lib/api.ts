const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function apiRequest(
  path: string,
  method: string = "POST",
  body?: Record<string, any>
) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}
