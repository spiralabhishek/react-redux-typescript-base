
import { useState } from 'react';
import { PriceListItem } from '@/types/PriceList';
import { parseJsonInput } from '@/utils/priceListUtils';

export const usePriceListPaste = (initialItems: PriceListItem[] = []) => {
  const [items, setItems] = useState<PriceListItem[]>(initialItems);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    // Prevent default paste behavior
    e.preventDefault();
    
    // Get clipboard content
    const clipboardText = e.clipboardData.getData('text');
    if (!clipboardText.trim()) return;

    try {
      // Try to parse as JSON
      const parsedItems = parseJsonInput(clipboardText);
      
      if (parsedItems) {
        // If successful, replace the current row and add new rows
        const newItems = [...items];
        
        // Replace current row with first item
        if (parsedItems.length > 0) {
          newItems[index] = parsedItems[0];
        }
        
        // Add additional rows for remaining items
        if (parsedItems.length > 1) {
          for (let i = 1; i < parsedItems.length; i++) {
            newItems.push(parsedItems[i]);
          }
        }
        
        setItems(newItems);
      } else {
        // If not valid JSON, just paste as text in the current field
        const currentItem = { ...items[index] };
        currentItem.commodity = clipboardText;
        
        const newItems = [...items];
        newItems[index] = currentItem;
        setItems(newItems);
      }
    } catch (error) {
      console.error("Error handling paste:", error);
      // Just paste as text in case of any error
      const currentItem = { ...items[index] };
      currentItem.commodity = clipboardText;
      
      const newItems = [...items];
      newItems[index] = currentItem;
      setItems(newItems);
    }
  };

  const addItem = () => {
    setItems([...items, { commodity: '', variety: '', minPrice: 0, maxPrice: 0 }]);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateItem = (index: number, field: keyof PriceListItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  return {
    items,
    setItems,
    handlePaste,
    addItem,
    removeItem,
    updateItem
  };
};
