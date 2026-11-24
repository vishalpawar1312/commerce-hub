import { AuthContext } from "@/context/AuthContext";
import { useEffect, useState, type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
type UserRole = "admin" | "customer";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}


export default function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
  })
  const login = (email: string, password: string): boolean => {
    if (email.trim() !== "admin@gmail.com" || password.trim() !== "Admin@123") {
      return false;
    }
    setAuthState({
      user: {
        id: "1", //type added string so instead 1 added "1"
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
      },
      isAuthenticated: true,
      loading: false,

    })
    localStorage.setItem("isLoggedIn", "true");
    return true;

  }
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false,
    })
    return;
  }
  useEffect(() => {
    const login = localStorage.getItem("isLoggedIn");

    if (login === "true") {
      setAuthState({
        user: {
          id: "1",
          name: "Admin",
          email: "admin@gmail.com",
          role: "admin",
        },
        isAuthenticated: true,
        loading: false,
      });
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        loading: false
      })
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        login,
        logout,
        loading: authState.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}