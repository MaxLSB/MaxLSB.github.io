/**
 * Converts model size to billions rounded up to the superior
 * @param size - Model size string (e.g., "350M", "1.2B", "21M")
 * @param isDataset - Whether this is a dataset (should keep original format)
 * @returns Formatted size in billions (e.g., "0.4B", "1.2B", "0.0B") or original for datasets
 */
export function formatModelSize(size: string, isDataset: boolean = false): string {
  // For datasets, keep the original format (e.g., "2.03M" stays "2.03M")
  if (isDataset) {
    return size;
  }
  
  // Extract number and unit
  const match = size.match(/^(\d+(?:\.\d+)?)([MB])$/);
  if (!match) return size; // Return original if no match
  
  const [, numberStr, unit] = match;
  const number = parseFloat(numberStr);
  
  if (unit === 'B') {
    // Already in billions, round up
    return `${Math.ceil(number * 10) / 10}B`;
  } else if (unit === 'M') {
    // Convert millions to billions and round up
    const billions = number / 1000;
    // For very small models (< 0.1B), show as 0.0B
    if (billions < 0.1) {
      return "0.0B";
    }
    // For larger models, round up to nearest 0.1B
    const rounded = Math.ceil(billions * 10) / 10;
    return `${rounded}B`;
  }
  
  return size; // Fallback
}

/**
 * Converts model size to billions rounded up to the superior
 * @param size - Model size string (e.g., "350M", "1.2B", "21M")
 * @returns Formatted size in billions (e.g., "0.4B", "1.2B", "0.1B")
 */
export function formatModelSizeInBillions(size: string): string {
  return formatModelSize(size);
}
