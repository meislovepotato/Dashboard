// components/DataGrid.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchMetrics, MetricData } from "@/api/mock-data";
import { format } from "date-fns";
import { Loading } from "@/components";

export default function DataGrid() {
  const [data, setData] = useState<MetricData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const metrics = await fetchMetrics();
        setData(metrics);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="overflow-x-auto rounded-2xl shadow">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Timestamp</th>
            <th className="py-2 px-4 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="py-2 px-4 border-b">
                {format(new Date(item.timestamp), "HH:mm dd/MM/yyyy")}{" "}
                {/* Format the timestamp */}
              </td>
              <td className="py-2 px-4 border-b">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
