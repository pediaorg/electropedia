import { api } from "@/trpc/server";

export default async function TestPage() {
  const test = await api.test.welcome({ name: "Juan" });

  return (
    <div>
      <h1>{test.message}</h1>
      <p>Current Time: {test.time.toISOString()}</p>
    </div>
  );
}
