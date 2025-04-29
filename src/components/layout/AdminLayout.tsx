import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  Map,
  MapPin,
  FileText,
  Newspaper,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Tag,
  PercentCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ComponentType<any>;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem = ({
  to,
  icon: Icon,
  label,
  isActive,
  onClick,
}: NavItemProps) => (
  <Link
    to={to}
    className={cn("sidebar-link", isActive && "active")}
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);

interface NavGroupProps {
  label: string;
  icon: React.ComponentType<any>;
  children: React.ReactNode;
  defaultOpen?: boolean;
  isActive: boolean;
  onClick?: () => void;
}

const NavGroup = ({
  label,
  icon: Icon,
  children,
  defaultOpen = false,
  isActive,
  onClick,
}: NavGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || isActive);

  return (
    <div className="mb-1">
      <button
        className={cn(
          "sidebar-link w-full justify-between",
          isActive && "active"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {isOpen && <div className="ml-6 mt-1 space-y-1">{children}</div>}
    </div>
  );
};

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col bg-white shadow-sm transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight">
              Admin Panel
            </h1>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-1">
            <NavItem
              to="/dashboard"
              icon={BarChart3}
              label="Dashboard"
              isActive={isActive("/dashboard")}
              onClick={() => setSidebarOpen(true)}
            />

            <NavItem
              to="/users"
              icon={Users}
              label="User Management"
              isActive={isActive("/users")}
              onClick={() => setSidebarOpen(true)}
            />

            <NavGroup
              label="Areas"
              icon={Map}
              isActive={isActive("/districts") || isActive("/talukas")}
            >
              <NavItem
                to="/districts"
                icon={Map}
                label="Districts"
                isActive={isActive("/districts")}
                onClick={() => setSidebarOpen(true)}
              />
              <NavItem
                to="/talukas"
                icon={MapPin}
                label="Talukas"
                isActive={isActive("/talukas")}
                onClick={() => setSidebarOpen(true)}
              />
            </NavGroup>

            <NavGroup
              label="Content"
              icon={FileText}
              isActive={isActive("/categories") || isActive("/posts")}
            >
              <NavItem
                to="/categories"
                icon={Tag}
                label="Categories"
                isActive={isActive("/categories")}
                onClick={() => setSidebarOpen(true)}
              />
              <NavItem
                to="/posts"
                icon={FileText}
                label="Posts"
                isActive={isActive("/posts")}
                onClick={() => setSidebarOpen(true)}
              />
            </NavGroup>
            <NavItem
              to="/price-lists"
              icon={PercentCircle}
              label="Price Lists"
              isActive={isActive("/price-lists")}
              onClick={() => setSidebarOpen(true)}
            />
            <NavItem
              to="/news"
              icon={Newspaper}
              label="News Management"
              isActive={isActive("/news")}
              onClick={() => setSidebarOpen(true)}
            />
            <NavItem
              to="/notifications"
              icon={Bell}
              label="Notifications"
              isActive={isActive("/notifications")}
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>

        <div className="border-t p-3">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={logout}
          >
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b bg-white px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          <div className="ml-auto flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt={user?.name || "User"} />
                    <AvatarFallback className="bg-primary text-white">
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-700"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-secondary p-4">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
