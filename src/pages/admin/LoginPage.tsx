import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import type {SubmitEvent, ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const {login} = useAuth();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin =(e:SubmitEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const success = login(email, password) ?? 0;
    if(!success){
      setError("Invalid credentials");
      setPassword(""); 
      return;
    }
    setError("");
    navigate("/admin/dashboard")
  }
  return (
    <>
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
        {error && <p className="errorMessage" role="alert">{error}</p>}
        <button>Login</button>
      </form>
    </>
  )
}
