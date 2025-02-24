// api/mock-data.ts

export type MetricData = {
    timestamp: string;
    value: number;
  };
  
  export type StatusUpdate = {
    id: number;
    message: string;
    type: "success" | "warning" | "error";
    timestamp: string;
  };
  
  // Simulate fetching time-series metrics data
  export async function fetchMetrics(): Promise<MetricData[]> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          { timestamp: "2025-02-20T12:00:00Z", value: 45 },
          { timestamp: "2025-02-20T13:00:00Z", value: 55 },
          { timestamp: "2025-02-20T14:00:00Z", value: 35 },
          { timestamp: "2025-02-20T15:00:00Z", value: 75 },
        ]);
      }, 1000)
    );
  }
  
  // Simulate fetching status updates
  export async function fetchStatus(): Promise<StatusUpdate[]> {
    return [
      { id: 1, message: "All systems operational", type: "success", timestamp: new Date().toISOString() },
      { id: 2, message: "Minor latency detected", type: "warning", timestamp: new Date().toISOString() },
      { id: 3, message: "Database error reported", type: "error", timestamp: new Date().toISOString() },
    ];
    }   
  