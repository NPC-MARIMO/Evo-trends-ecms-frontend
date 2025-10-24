import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// Custom CSS for the filter component
const filterStyles = `
  .aesthetic-filter {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .filter-container {
    background: var(--white);
    border: 1px solid rgba(49, 46, 129, 0.1);
    box-shadow: 0 4px 20px rgba(49, 46, 129, 0.08);
  }

  .filter-header {
    background: linear-gradient(135deg, var(--white) 0%, rgba(241, 243, 255, 0.5) 100%);
    border-bottom: 1px solid rgba(49, 46, 129, 0.1);
  }

  .filter-section {
    transition: all 0.3s ease;
  }

  .filter-section-header {
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .filter-section-header:hover {
    color: var(--dark-accent);
  }

  .custom-checkbox {
    border: 2px solid rgba(49, 46, 129, 0.3);
    transition: all 0.2s ease;
  }

  .custom-checkbox[data-state="checked"] {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    border-color: transparent;
  }

  .filter-label {
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .filter-label:hover {
    color: var(--dark-accent);
    transform: translateX(2px);
  }

  .filter-count {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    color: white;
    font-size: 0.7rem;
    min-width: 20px;
    height: 20px;
  }

  .separator {
    background: linear-gradient(90deg, transparent, rgba(49, 46, 129, 0.1), transparent);
  }
`;

function ProductFilter({ filters, handleFilter }) {
  const [expandedSections, setExpandedSections] = useState(
    Object.keys(filterOptions).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const getFilterCount = (keyItem) => {
    if (!filters || !filters[keyItem]) return 0;
    return filters[keyItem].length;
  };

  return (
    <>
      <style>{filterStyles}</style>
      <div className="aesthetic-filter filter-container rounded-xl overflow-hidden">
        {/* Filter Header */}
        <div className="filter-header p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#312E81] to-[#4F46E5]">
              <Filter className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#312E81]">Filters</h2>
              <p className="text-sm text-gray-600 mt-1">Refine your search</p>
            </div>
          </div>
        </div>

        {/* Filter Sections */}
        <div className="p-6 space-y-6">
          {Object.keys(filterOptions).map((keyItem) => (
            <Fragment key={keyItem}>
              <div className="filter-section">
                {/* Section Header */}
                <div 
                  className="filter-section-header flex items-center justify-between mb-3"
                  onClick={() => toggleSection(keyItem)}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-[#312E81]">
                      {keyItem}
                    </h3>
                    {getFilterCount(keyItem) > 0 && (
                      <span className="filter-count rounded-full flex items-center justify-center px-1.5 text-xs font-medium">
                        {getFilterCount(keyItem)}
                      </span>
                    )}
                  </div>
                  {expandedSections[keyItem] ? (
                    <ChevronUp className="h-4 w-4 text-[#B38A69]" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#B38A69]" />
                  )}
                </div>

                {/* Filter Options */}
                {expandedSections[keyItem] && (
                  <div className="grid gap-3 mt-3">
                    {filterOptions[keyItem].map((option) => {
                      const isChecked = filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1;

                      return (
                        <Label
                          key={option.id}
                          className="filter-label flex items-center gap-3 text-gray-700 hover:text-[#312E81] py-1 px-2 rounded-lg transition-all duration-200"
                        >
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={() => handleFilter(keyItem, option.id)}
                            className="custom-checkbox rounded-md data-[state=checked]:text-white"
                          />
                          <span className="flex-1 text-sm font-medium">
                            {option.label}
                          </span>
                          {option.count && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {option.count}
                            </span>
                          )}
                        </Label>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {/* Separator - Only show if not last item */}
              {keyItem !== Object.keys(filterOptions)[Object.keys(filterOptions).length - 1] && (
                <Separator className="separator h-px my-2" />
              )}
            </Fragment>
          ))}
        </div>

        {/* Active Filters Summary */}
        {filters && Object.keys(filters).some(key => filters[key] && filters[key].length > 0) && (
          <div className="border-t border-gray-200 p-4 bg-[#F1F3FF]">
            <div className="text-sm text-[#312E81] font-medium">
              Active filters applied
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductFilter;