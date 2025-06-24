import { api } from "@/trpc/server";
import { TRPCError } from "@trpc/server";

type Props = { params: Promise<{ id: string }> };
export default async function Discussion(props: Props) {
  const params = await props.params;
  const response = await api.discussions.get({ id: params.id });

  if (response instanceof TRPCError) {
    return <h1>No se encontró la discusión</h1>;
  }

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
