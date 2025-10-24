import ProductFilter from "@/components/shopping-view/filter";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { sortOptions } from "@/config";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import { ArrowUpDownIcon, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

// Custom CSS for the listing page
const listingStyles = `
  .aesthetic-listing {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .listing-container {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-bg) 100%);
  }

  .sort-button {
    border: 1px solid rgba(49, 46, 129, 0.2);
    background: var(--white);
    color: var(--dark-accent);
    transition: all 0.3s ease;
  }

  .sort-button:hover {
    border-color: var(--accent);
    background: rgba(179, 138, 105, 0.05);
    transform: translateY(-1px);
  }

  .dropdown-content {
    background: var(--white);
    border: 1px solid rgba(49, 46, 129, 0.1);
    box-shadow: 0 8px 32px rgba(49, 46, 129, 0.12);
  }

  .dropdown-item {
    transition: all 0.2s ease;
  }

  .dropdown-item:hover {
    background-color: rgba(241, 243, 255, 0.8);
    color: var(--dark-accent);
  }

  .product-grid {
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(49, 46, 129, 0.08);
  }

  .header-section {
    background: linear-gradient(135deg, var(--white) 0%, rgba(241, 243, 255, 0.5) 100%);
    border-bottom: 1px solid rgba(49, 46, 129, 0.1);
  }

  .product-count {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { toast } = useToast();

  const categorySearchParam = searchParams.get("category");

  function handleSort(value) {
    setSort(value);
  }

  function handleFilter(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product added to cart successfully!",
          description: "Item has been added to your shopping cart.",
        });
      }
    });
  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, [categorySearchParam]);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);

  useEffect(() => {
    if (filters !== null && sort !== null)
      dispatch(
        fetchAllFilteredProducts({ filterParams: filters, sortParams: sort })
      );
  }, [dispatch, sort, filters]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  return (
    <>
      <style>{listingStyles}</style>
      <div className="aesthetic-listing listing-container min-h-screen w-full p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#312E81] mb-2">
              Our Collection
            </h1>
            <p className="text-gray-600">
              Discover exquisite pieces crafted with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            {/* Filter Sidebar */}
            <div className="bg-white rounded-xl shadow-sm  h-fit sticky top-6">
             
              <ProductFilter filters={filters} handleFilter={handleFilter} />
            </div>

            {/* Products Section */}
            <div className="product-grid rounded-xl overflow-hidden">
              {/* Products Header */}
              <div className="header-section p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#312E81]">
                      All Products
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Curated selection of premium jewelry
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium product-count">
                      {productList?.length || 0} Products
                    </span>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="sort-button flex items-center gap-2 rounded-lg"
                        >
                          <ArrowUpDownIcon className="h-4 w-4" />
                          <span>Sort by</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="dropdown-content w-48 rounded-xl"
                      >
                        <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                          {sortOptions.map((sortItem) => (
                            <DropdownMenuRadioItem
                              value={sortItem.id}
                              key={sortItem.id}
                              className="dropdown-item cursor-pointer rounded-lg"
                            >
                              {sortItem.label}
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="p-6">
                {productList && productList.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {productList.map((productItem) => (
                      <ShoppingProductTile
                        key={productItem.id || productItem._id}
                        handleGetProductDetails={handleGetProductDetails}
                        product={productItem}
                        handleAddtoCart={handleAddtoCart}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Filter className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      Try adjusting your filters or search terms to find what you're looking for.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <ProductDetailsDialog
          open={openDetailsDialog}
          setOpen={setOpenDetailsDialog}
          productDetails={productDetails}
        />
      </div>
    </>
  );
}

export default ShoppingListing;