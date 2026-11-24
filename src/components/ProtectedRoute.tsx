import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"


type UserRole = "admin" | "customer";
interface ProtectedRouteProps {
  allowedRole: UserRole ,
}
export default function ProtectedRoute({ allowedRole }: ProtectedRouteProps) {
  const { user, isAuthenticated,loading } = useAuth();
  if(loading) {
    return <div>Loading...</div>
  }
  if(!isAuthenticated && user?.role !== allowedRole){
    return <Navigate to ={"/admin/login" }/>;
  }
  return <Outlet/>
}
