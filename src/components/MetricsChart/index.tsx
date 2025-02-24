// components/MetricsChart.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchMetrics, MetricData } from "@/api/mock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Loading } from "@/components";
import { format } from "date-fns"; // Install date-fns for easy date formatting

export default function MetricsChart() {
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
  if (error) return <p>Error loading metrics.</p>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp: string) =>
            format(new Date(timestamp), "HH:mm")
          } // Format the timestamp
        />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
