import { api } from "@/trpc/server";

export default async function DbTestPage() {
  const response = await api.test.db();

  console.log(response);

  return (
    <div>
      <pre className="bg-gray-400">{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
