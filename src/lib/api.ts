const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://payapi.zezo.in/api";

export async function apiRequest(
  path: string,
  method: string = "GET",
  body?: Record<string, any>
) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}
