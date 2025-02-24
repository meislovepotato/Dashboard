import { Suspense } from "react";
import { ErrorBoundary, StatusCards } from "@/components";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <ErrorBoundary>
        <Suspense>
            <StatusCards />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
