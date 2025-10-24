import { HousePlug } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { shoppingViewHeaderMenuItems } from "@/config";

function ShoppingHeader() {
  return (
    <header className="w-full  bg-[#faf8f6] shadow-sm">
      <div
        className="
          flex items-center justify-between
          px-6 md:px-14 py-2
          min-h-[54px]
        "
      >
        {/* Logo and Brand */}
        <Link
          to="/shop/home"
          className="flex items-center gap-3 group"
          style={{ textDecoration: "none" }}
        >
          <span className="rounded-full bg-[#ded6ce] p-2 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <HousePlug className="h-6 w-6" color="#222" />
          </span>
          <span
            className="font-bold text-[17px] leading-none tracking-tight"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: "#262626",
              marginLeft: "4px",
              letterSpacing: "0.01em",
            }}
          >
            Jhankaar
          </span>
        </Link>
        {/* Navigation */}
        <nav className="flex gap-6 md:gap-10">
          {(shoppingViewHeaderMenuItems ?? []).map((menuItem) => (
            <NavLink
              to={menuItem.path}
              key={menuItem.id}
              className={({ isActive }) =>
                `transition-colors duration-150 px-1.5 py-0.5 rounded-sm text-[13px] font-medium
                ${isActive
                  ? "text-[#61442e] bg-[#e7d7cb] shadow"
                  : "text-neutral-600 hover:text-[#3c2d23] hover:bg-[#f6ede6]"
                }`
              }
              style={{
                fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                lineHeight: 1.7,
                letterSpacing: "0.01em",
              }}
              end
            >
              {menuItem.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default ShoppingHeader;
