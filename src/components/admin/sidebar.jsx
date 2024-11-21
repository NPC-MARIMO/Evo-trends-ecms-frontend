import { ChartNoAxesCombined, LayoutDashboard, ShoppingBag, Truck } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSideBarMenuItems = [
    {
      id : "Dashboard",
      label: "Dashboard",
      path : "/admin/dashboard",
      icon : <LayoutDashboard />
    },
    {
      id : "Products",
      label: "Products",
      path : "/admin/products",
      icon : <ShoppingBag />

    },
    {
      id : "Orders",
      label: "Orders",
      path : "/admin/orders",
      icon : <Truck />

    }
  ]
function MenuComponent({setOpen}) {

    const navigate = useNavigate();
    return <nav className="mt-8 flex flex-col gap-2">
        {
            adminSideBarMenuItems.map((item) => (
                <div onClick={() => {
                    navigate(item.path)
                    setOpen ? setOpen(false) : null
                }} key={item.id} className="flex text-xl items-center cursor-pointer text-zinc-600 hover:text-black gap-2 rounded-md px-3 py-2 ">
                    {item.icon}
                    <span>{item.label}</span>

                </div>
            ))
        }

    </nav>
}

function AdminSideBar({open , setOpen}) {

    return ( 
        <Fragment>
            <Sheet open={open} onOpenChange={setOpen} >
                <SheetContent side="left" className="w-64" >
                    <div className="flex mt-6 flex-col h-full">
                        <SheetHeader className="border-b">
                            <SheetTitle className="flex gap-2 "> <ChartNoAxesCombined size={30} /><span className="text-2xl font-extrabold "> Admin Panel</span></SheetTitle>
                        </SheetHeader>
                        <MenuComponent setOpen={setOpen}/>

                    </div>
                </SheetContent>

            </Sheet>
            <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
                <div onClick={() => navigate("/admin/dashboard")} className="flex cursor-pointer items-center gap-2 ">
                <ChartNoAxesCombined size={30} />
                    <h1 className="text-xl font-extrabold">Admin Panel</h1>
                </div>
                <MenuComponent />
            </aside>
        </Fragment>
    );
}

export default AdminSideBar;