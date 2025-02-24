import { Suspense } from "react";
import  { ErrorBoundary }  from "@/components"

export default function Dashboard() {
  return (
    <div className="dashboard-layout p-4 grid gap-4 lg:grid-cols-3">
      <ErrorBoundary>
        <Suspense>hi</Suspense>
      </ErrorBoundary>
    </div>
  );
}
