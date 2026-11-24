import { createContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email:string, password:string)=> void;
  logout: ()=> void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null)



