import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks/hooks";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate();

  const users = useAppSelector(state => state.users);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  const filterUsers = users.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div className="usersPage">
      <h1>Users</h1>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filterUsers.length === 0 ?
        <div className="emptyState">No users found</div> :
        <div className="usersTable">
          <div className="tableHeader">
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
          </div>

          {filterUsers.map((user) => (
            <div 
              className="tableRow" 
              key={user.id}
              onClick={() => navigate(`/admin/users/${user.id}`)}
            >
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.role}</div>
              <div className={`statusBadge status${user.status}`}>{user.status}</div>
            </div>
          ))}

        </div>
      }

    </div>
  );
}