import { Suspense } from "react";
import { ErrorBoundary, Loading, MetricsChart, StatusCards } from "@/components";

export default function Dashboard() {
  return (
    <div  className="dashboard-layout">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <StatusCards />
          <MetricsChart />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
