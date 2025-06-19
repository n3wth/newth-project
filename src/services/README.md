# Services

This directory contains service modules for API integrations and external data fetching.

## Adding a Service

Create a new service file for each external API or data source:

```typescript
// src/services/myApiService.ts
export interface MyApiData {
  id: string
  name: string
  // ... other properties
}

export async function fetchMyApiData(): Promise<MyApiData[]> {
  try {
    const response = await fetch('/api/my-data')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
```

## Best Practices

- Use TypeScript interfaces for API response types
- Handle errors gracefully with try/catch
- Consider adding loading states and error boundaries in your components
- Use environment variables for API keys and endpoints
- Implement caching for frequently accessed data
- Add proper error logging and monitoring
