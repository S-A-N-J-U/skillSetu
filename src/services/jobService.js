export async function fetchJobs({ search = 'Developer' } = {}) {
  try {
    const response = await fetch(
      `https://www.arbeitnow.com/api/job-board-api?search=${encodeURIComponent(search)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const allJobs = result.data || [];
    
    // Cap results to exactly 100 items
    return allJobs.slice(0, 100);
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return [];
  }
}