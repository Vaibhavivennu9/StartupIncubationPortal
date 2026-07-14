import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import api from "../services/api";
const Login = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role, setRole] = useState("Founder");
 const handleLogin = async () => {

    try {

        const response = await api.post("/auth/login", {
            email,
            password
        });

        console.log(response.data);

        // Store JWT
        localStorage.setItem("token", response.data.token);

        // Store User
        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        // Get role
        const role = response.data.user.role;

        console.log("Role:", role);

        // Redirect
        if (role === "entrepreneur") {
            navigate("/founder/dashboard");
        }
        else if (role === "mentor") {
            navigate("/mentor/dashboard");
        }
        else if (role === "investor") {
            navigate("/investor/dashboard");
        }
        else if (role === "admin") {
            navigate("/admin/dashboard");
        }
        else {
            alert("Unknown Role");
        }

    } catch (error) {

        alert(error.response?.data?.message || "Login Failed");

    }

};
  
  return (
    <div className="min-h-screen bg-[#FFFFE3] flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Side */}

        <div className="bg-[#6D8196] text-white flex flex-col justify-center items-center p-10">

          <div className="bg-white text-[#6D8196] p-5 rounded-full mb-6">
            <FaRocket size={50} />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Welcome Back!
          </h1>

          <p className="text-center text-lg leading-8">
            Login to access your Startup Incubation Portal and continue your entrepreneurial journey.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-8">
            Enter your credentials to continue
          </p>

          {/* Email */}

          <div className="mb-5">

            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaEnvelope className="text-[#6D8196]" />

              <input
                type="email"
                placeholder="Enter your email"
                className="ml-3 outline-none w-full"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>

          </div>

          {/* Password */}

          <div className="mb-6">

            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaLock className="text-[#6D8196]" />

              <input
                type="password"
                placeholder="Enter your password"
                className="ml-3 outline-none w-full"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

            </div>

          </div>

          {/* Role */}

          <div className="mb-8">

            <label className="block mb-3 font-medium text-[#4A4A4A]">
              Login As
            </label>

            <div className="flex gap-6">

              {["Founder", "Mentor", "Admin"].map((item) => (

                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >

                  <input
                    type="radio"
                    value={item}
                    checked={role === item}
                    onChange={(e) => setRole(e.target.value)}
                  />

                  {item}

                </label>

              ))}

            </div>

          </div>

          {/* Login Button */}

          <button onClick={handleLogin} className="w-full bg-[#6D8196] text-white py-3 rounded-xl hover:bg-[#4A4A4A] transition">

            Login

          </button>

          {/* Forgot Password */}

          <div className="mt-5 text-right">

            <Link
              to="/forgot-password"
              className="text-[#6D8196] hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Register */}

          <p className="mt-8 text-center text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-[#6D8196] font-semibold ml-2 hover:underline"
            >
              Register Here
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;