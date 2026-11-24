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
    return <div>User not found</div>;
  }

  const handleEdit = ()=> {
    navigate(`edit`)
  }
  return (
    <div>
      <h1>User Details</h1>

      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.role}</div>
      <div>{user.status}</div>

      <button onClick={handleEdit}>Edit User</button>
    </div>
  );
}