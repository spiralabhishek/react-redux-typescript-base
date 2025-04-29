
import { PriceListItem } from "@/types/PriceList";

export const parseJsonInput = (input: string): PriceListItem[] | null => {
  try {
    const parsed = JSON.parse(input);
    
    // If it's a single object, convert to array
    const itemsArray = Array.isArray(parsed) ? parsed : [parsed];
    
    // Validate each item has the required properties
    const validItems = itemsArray.every(item => 
      typeof item === 'object' && 
      'commodity' in item && 
      'variety' in item && 
      'minPrice' in item && 
      'maxPrice' in item
    );
    
    if (!validItems) {
      console.error("Invalid JSON format for price list items");
      return null;
    }
    
    return itemsArray as PriceListItem[];
  } catch (error) {
    console.error("Error parsing JSON input:", error);
    return null;
  }
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
