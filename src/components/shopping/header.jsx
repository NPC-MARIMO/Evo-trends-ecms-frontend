import { House, LogOut, Menu, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { DropdownMenu,DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth";

function MenuItems() {
    return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map((item) => <Link className="text-sm font-medium" to={item.path} key={item.id} >{item.label}</Link> )
        }

    </nav>
}



function HeaderRightContent(){

    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return <div className="flex lg:items-center lg:flex-row flexcol gap-4">
        <Button variant="outline" size="icon">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">User Cart</span>
        </Button>
        <DropdownMenu>
            <DropdownMenuTrigger  asChild>
                <Avatar className="bg-black">
                    <AvatarFallback className="bg-black text-white font-extrabold">
                        {user?.userName[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">
                <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/shop/account')}><User className="mr-2 h-4 w-4" />Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}><LogOut className="w-4 h-4 mr-2"/>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

function ShoppingHeader() {

    const {isAuthenticated} = useSelector((state) => state.auth)

    return ( 
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/shop/home" className="flex items-center gap-2" >
                    <House  className="h-6 w-6"/>
                    <span className="font-bold">EVO-Trend</span>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only ">Toggle Header Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side = 'left' className="w-full max-w-xs"> 
                        <MenuItems />
                        <HeaderRightContent />  
                    </SheetContent>
                </Sheet>
                <div className="hidden lg:block ">
                    <MenuItems />
                </div>
                <div className="hidden lg:block">
                        <HeaderRightContent />
                </div>
            </div>

        </header>
    );
}

export default ShoppingHeader;