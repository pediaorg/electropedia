"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { getDiscussion } from "@/app/lib/actions";

export default function ClientDiscussion() {
  const params = useParams<{ id: string }>();

  const discussion = useQuery({
    queryKey: ["discussion", params.id],
    queryFn: () => getDiscussion(params),
  });

  console.log(discussion.data);

  // return <pre>{JSON.stringify(discussion.data, null, 2)}</pre>;
  return discussion.status;
}
