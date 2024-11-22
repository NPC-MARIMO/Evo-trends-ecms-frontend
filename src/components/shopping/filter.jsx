import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b ">
        <h2 className="text-lg font-bold">Filters</h2>
      </div>
      <div className="space-y-4 p-4 ">
        {
            Object.keys(filterOptions).map((keyItem, j) => <Fragment key={j} >
                <div>
                    <h3 className="font-semibold text-base">{keyItem}</h3>
                </div>
                <div className="grid gap-2 mt-2">
                    {
                        filterOptions[keyItem].map((option, i) => <Label key={i} className="flex items-center gap-2 font-medium">
                            <Checkbox checked={
                              filters && Object.keys(filters).length > 0 &&
                              filters[keyItem] && filters[keyItem].indexOf(option.id)> -1
                            } onCheckedChange={() => handleFilter(keyItem, option.id)} />
                            {option.label}
                        </Label>)
                    }
                </div>
                <Separator />
            </Fragment> )
        }
      </div>
    </div>
  );
}

export default ProductFilter;
