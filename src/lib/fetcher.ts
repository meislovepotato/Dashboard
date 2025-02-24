export const fetcher = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`An error occurred while fetching data: ${response.statusText}`);
    }
  
    return response.json();
  };