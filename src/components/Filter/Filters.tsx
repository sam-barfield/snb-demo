import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// Price and Stock filter.
export const Filters = ({ 
      maxPrice, 
      setMaxPrice, 
      inStockOnly, 
      setInStockOnly 
  }:{ 
      maxPrice:number; 
      setMaxPrice:(n:number)=>void; 
      inStockOnly:boolean; 
      setInStockOnly:(b:boolean)=>void; 
  }) => {

  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="space-y-4">
        <div>
          <Label htmlFor="price" className="text-xs">
            Max price
          </Label>
          <div className="flex items-center gap-3 mt-1">
            <input 
              id="price" 
              type="range" 
              min={10} 
              max={1000} 
              step={5} 
              value={maxPrice} 
              onChange={ (e) => setMaxPrice(parseInt(e.target.value)) } 
              className="w-full accent-[#ee2d2d]"
            />
            <div className="text-sm font-medium ml-2 text-right">
              £{maxPrice}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Switch 
            id="stock" 
            checked={inStockOnly} 
            onCheckedChange={setInStockOnly} 
          />
          <Label 
            htmlFor="stock" 
            className="text-sm accent-[#ee2d2d]"
          >
            In stock only
          </Label>
        </div>
      </div>
    </div>
  );
}
