import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Historia", path: "/historia" },
  { label: "Servicios", path: "/servicios" },
  { label: "Blog", path: "/blog" },
  { label: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-secondary border-b border-secondary/80 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Taller Ramirez logo" width={40} height={40} />
          <span className="font-heading text-xl tracking-wider text-primary-foreground">
            TALLER RAMIREZ
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-4 py-2 rounded font-heading text-sm tracking-wide transition-colors ${
                  pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-primary-foreground hover:bg-primary/20"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary/80 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-heading text-sm tracking-wide ${
                pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted hover:bg-primary/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
