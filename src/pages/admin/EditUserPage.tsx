
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { selectUserById, updateUser } from "@/store/slices/usersSlice";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


export default function EditUserPage() {
  const { userId } = useParams();
  const user = useAppSelector(state => selectUserById(state, userId ?? ""));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: user?.id ?? "",
    name: user?.name ?? "",
    email: user?.email ?? "",
    role: user?.role ?? "",
    status: user?.status ?? "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSave = ()=> {
    dispatch(updateUser(formData))
    navigate(`/admin/users/${userId}`)
  }
  const handleCancel = ()=> {
    navigate(`/admin/users/${userId}`)
  }
  return (
    <div className="editUserPage">
      <h1>Edit User</h1>
      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label>Role</label>
      <input
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <label>Status</label>
      <input
        name="status"
        value={formData.status}
        onChange={handleChange}
      />
      <button className="btnSecondary" onClick={handleCancel}>Cancel</button>
      <button onClick={handleSave}>Save Changes</button>
    </div>

  )
}
