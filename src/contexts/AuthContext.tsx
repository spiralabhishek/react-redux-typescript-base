import { loginAction } from "@/reduxTool/auth/middleware";
import { useAppDispatch } from "@/reduxTool/store";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      const storedUser = localStorage.getItem("admin_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    dispatch(loginAction({ email, password })).then((res) => {
      if (res?.payload?.accessToken) {
        setUser(res?.payload);
        localStorage.setItem("admin_user", JSON.stringify(res?.payload));
        toast.success("Logged in successfully");
        navigate("/dashboard");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error("Invalid email or password");
      }
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("admin_user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
