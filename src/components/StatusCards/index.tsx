"use client";
import useSWR from "swr";
import { fetchStatus, StatusUpdate } from "@/api/mock-data";
import { Card, CardContent } from "./components";
import { Loading } from "@/components";

export default function StatusCards() {
  const { data, error, isLoading } = useSWR<StatusUpdate[]>(
    "status",
    fetchStatus,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading status.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((status) => (
        <Card
          key={status.id}
          className="rounded-2xl shadow p-4 dark:bg-gray-800"
        >
          <CardContent>
            <h3 className="text-xl font-semibold">
              {status.type.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-500">{status.message}</p>
            <p className="text-xs text-gray-400">
              {new Date(status.timestamp).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
