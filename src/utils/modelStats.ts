export interface ModelStats {
  likes: number;
  downloads: number;
}

export async function fetchModelStats(modelName: string): Promise<ModelStats> {
  try {
    // Check if it's a dataset by name
    const isDataset = modelName === 'kurakurai/scholar' || modelName === 'kurakurai/luth-sft' || modelName === 'MaxLSB/LeCarnet';
    
    const apiUrl = isDataset 
      ? `https://huggingface.co/api/datasets/${modelName}`
      : `https://huggingface.co/api/models/${modelName}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as { 
      likes?: number; 
      downloads?: number; 
    };
    
    return {
      likes: data.likes || 0,
      downloads: data.downloads || 0
    };
  } catch (error) {
    console.error(`Failed to fetch stats for ${modelName}:`, error);
    return {
      likes: 0,
      downloads: 0
    };
  }
}

export async function fetchAllModelStats(modelNames: string[]): Promise<Record<string, ModelStats>> {
  const stats: Record<string, ModelStats> = {};
  
  // Fetch all stats in parallel for better performance
  const promises = modelNames.map(async (modelName) => {
    const modelStats = await fetchModelStats(modelName);
    stats[modelName] = modelStats;
  });
  
  await Promise.all(promises);
  
  return stats;
}
