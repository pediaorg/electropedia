import { api } from "@/trpc/server";

type Props = { params: Promise<{ id: string }> };
export default async function Discussion(props: Props) {
  const params = await props.params;
  const response = await api.discussions.get({ id: params.id });

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
