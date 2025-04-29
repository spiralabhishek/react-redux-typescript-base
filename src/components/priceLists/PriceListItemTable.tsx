
import React from 'react';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PriceListItem } from '@/types/PriceList';
import { usePriceListPaste } from '@/hooks/usePriceListPaste';

interface PriceListItemTableProps {
  items: PriceListItem[];
  onChange: (items: PriceListItem[]) => void;
}

export const PriceListItemTable: React.FC<PriceListItemTableProps> = ({ items: initialItems, onChange }) => {
  const {
    items,
    handlePaste,
    addItem,
    removeItem,
    updateItem
  } = usePriceListPaste(initialItems);

  // Update parent component when items change
  React.useEffect(() => {
    onChange(items);
  }, [items, onChange]);

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Commodity</TableHead>
            <TableHead>Variety</TableHead>
            <TableHead>Min Price</TableHead>
            <TableHead>Max Price</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Input
                  value={item.commodity}
                  onChange={(e) => updateItem(index, 'commodity', e.target.value)}
                  onPaste={(e) => handlePaste(e, index)}
                  placeholder="Commodity name"
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.variety}
                  onChange={(e) => updateItem(index, 'variety', e.target.value)}
                  placeholder="Variety"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.minPrice}
                  onChange={(e) => updateItem(index, 'minPrice', Number(e.target.value))}
                  placeholder="Min Price"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.maxPrice}
                  onChange={(e) => updateItem(index, 'maxPrice', Number(e.target.value))}
                  placeholder="Max Price"
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(index)}
                  disabled={items.length <= 1}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <Button type="button" variant="outline" onClick={addItem}>
        Add Item
      </Button>

      <div className="text-sm text-muted-foreground mt-2">
        <p>Tip: You can paste JSON in the Commodity field to automatically fill the row. Example format:</p>
        <pre className="bg-muted p-2 rounded text-xs mt-1">
          {`{
  "commodity": "Wheat",
  "variety": "Regular",
  "minPrice": 50,
  "maxPrice": 75
}`}
        </pre>
        <p className="mt-1">You can also paste an array of objects to create multiple rows at once.</p>
      </div>
    </div>
  );
};
