import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";

// Custom CSS for the enhanced design
const customStyles = `
  .aesthetic-navbar {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .nav-header {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-bg) 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(49, 46, 129, 0.1);
    box-shadow: 0 4px 20px rgba(49, 46, 129, 0.08);
  }

  .nav-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: var(--dark-accent);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--dark-accent));
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .cart-button {
    position: relative;
    transition: all 0.3s ease;
  }

  .cart-button:hover {
    background-color: rgba(179, 138, 105, 0.1);
    transform: translateY(-1px);
  }

  .cart-badge {
    background: linear-gradient(135deg, var(--dark-accent), #4F46E5);
    box-shadow: 0 2px 8px rgba(49, 46, 129, 0.3);
  }

  .user-avatar {
    transition: all 0.3s ease;
    background: linear-gradient(135deg, var(--dark-accent), #4F46E5);
  }

  .user-avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(49, 46, 129, 0.2);
  }

  .mobile-sheet {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-bg) 100%);
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
    transform: translateX(4px);
  }
`;

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeItem, setActiveItem] = useState("");

  function handleNavigate(getCurrentMenuItem) {
    setActiveItem(getCurrentMenuItem.id);
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <>
      <style>{customStyles}</style>
      <nav className="flex flex-col mb-3 lg:mb-0  lg:items-center gap-6 lg:flex-row">
        {shoppingViewHeaderMenuItems.map((menuItem) => (
          <Label
            onClick={() => handleNavigate(menuItem)}
            className={`text-sm font-medium cursor-pointer nav-link ${
              activeItem === menuItem.id 
                ? "text-[#312E81] font-semibold" 
                : "text-gray-700"
            }`}
            key={menuItem.id}
          >
            {menuItem.label}
          </Label>
        ))}
      </nav>
    </>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative cart-button rounded-full border-[#B38A69] hover:border-[#312E81]"
        >
          <ShoppingCart className="w-5 h-5 text-[#312E81]" />
          <span className="absolute -top-1 -right-1 font-bold text-xs text-white cart-badge w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        <SheetContent className="mobile-sheet">
          <UserCartWrapper
            setOpenCartSheet={setOpenCartSheet}
            cartItems={
              cartItems && cartItems.items && cartItems.items.length > 0
                ? cartItems.items
                : []
            }
          />
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="user-avatar cursor-pointer border-2 border-white shadow-lg">
            <AvatarFallback className="text-white font-bold text-sm">
              {user?.userName?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          side="right" 
          className="w-56 dropdown-content rounded-xl"
          align="end"
          // White and #F1F3FF color gradient background
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F1F3FF 100%)"
          }}
        >
          <DropdownMenuLabel className="text-[#312E81] font-semibold">
            Logged in as {user?.userName ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1) : ""}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem 
            onClick={() => navigate("/shop/account")}
            className="dropdown-item cursor-pointer text-gray-700"
          >
            <UserCog className="mr-2 h-4 w-4 text-[#B38A69]" />
            <span>Account Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem 
            onClick={handleLogout}
            className="dropdown-item cursor-pointer text-red-600 hover:text-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 w-full nav-header aesthetic-navbar">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <Link 
          to="/shop/home" 
          className="flex items-center gap-3 group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#312E81] to-[#4F46E5] group-hover:from-[#B38A69] group-hover:to-[#312E81] transition-all duration-300">
            <HousePlug className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-[#312E81] to-[#B38A69] bg-clip-text text-transparent">
            Jhankaar
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="lg:hidden rounded-full border-[#B38A69] hover:border-[#312E81] hover:bg-[#F1F3FF]"
            >
              <Menu className="h-5 w-5 text-[#312E81]" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-80 mobile-sheet border-r-0"
          >
            <div className="flex flex-col h-full pt-8">
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-8 px-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#312E81] to-[#4F46E5]">
                  <HousePlug className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-[#312E81]">Jhankaar</span>
              </div>
              
              {/* Mobile Menu Items */}
              <div className="flex-1">
                <MenuItems />
              </div>
              
              {/* Mobile User Section */}
              <div className="border-t border-gray-200 pt-4">
                <HeaderRightContent />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="hidden lg:block">
            <MenuItems />
          </div>

          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;   