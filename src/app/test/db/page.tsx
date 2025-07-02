import { api } from "@/trpc/server";

export default async function DbTestPage() {
  const response = await api.products.get({ id: "6865b6f33e299ff65f4ab505" });

  console.log(response);

  return (
    <div>
      <pre className="bg-gray-400">{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
