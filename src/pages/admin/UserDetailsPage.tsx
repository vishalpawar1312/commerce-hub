import { useAppSelector } from "@/store/hooks/hooks";
import { selectUserById } from "@/store/slices/usersSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const user = useAppSelector((state) =>
   selectUserById(state, userId ?? "")
  );
  const navigate = useNavigate();
  if (!user) {
    return <div className="emptyState">User not found</div>;
  }

  const handleEdit = ()=> {
    navigate(`edit`)
  }
  return (
    <div className="userDetailsPage">
      <h1>User Details</h1>

      <div className="userName">{user.name}</div>
      <div className="userEmail">{user.email}</div>
      <div className="userRole">{user.role}</div>
      <div className={`statusBadge status${user.status}`}>{user.status}</div>

      <button onClick={handleEdit}>Edit User</button>
    </div>
  );
}