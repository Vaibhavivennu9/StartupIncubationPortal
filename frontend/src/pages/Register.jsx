import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import api from "../services/api";
const Register = () => {
  const navigate = useNavigate();
const[showPassword,setShowPassword]=useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [role, setRole] = useState("entrepreneur");
const handleRegister = async () => {

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all required fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  //try {

    const response = await api.post("/auth/register", {
      name,
      email,
      password,
      role
    });
    console.log("Response:",response.data);
    alert(response.data.message);

    navigate("/verify-otp",{
      state:{
        email
      }
    });

 // } //catch (error) {

   // alert(error.response?.data?.message || "Registration Failed");

 // }

};

  return (
    <div className="min-h-screen bg-[#FFFFE3] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">

        {/* Left Section */}

        <div className="bg-[#6D8196] text-white flex flex-col justify-center items-center p-10">

          <div className="bg-white text-[#6D8196] p-5 rounded-full mb-6">
            <FaRocket size={50} />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Join Our Community
          </h1>

          <p className="text-center text-lg leading-8">
            Register to become a part of our Startup Incubation Platform and
            start your entrepreneurial journey.
          </p>

        </div>

        {/* Right Section */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Fill in your details to register
          </p>

          {/* Full Name */}

          <div className="mb-5">
            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Full Name
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaUser className="text-[#6D8196]" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="ml-3 outline-none w-full"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>

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

          {/* Phone */}

          <div className="mb-5">
            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Phone Number
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaPhone className="text-[#6D8196]" />

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="ml-3 outline-none w-full"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}

          <div className="mb-5">
            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Password
            </label>

            <div className="relative flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-[#6D8196]" />

              <input
                type={showPassword?"text":"password"}
                name="password"
                placeholder="Enter password"
                className=" w-full ml-3 outline-none pr-10"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword ? <FaEyeSlash />:<FaEye/>}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div className="mb-6">
            <label className="block mb-2 font-medium text-[#4A4A4A]">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-[#6D8196]" />

              <input
                type="password"
                placeholder="Confirm password"
                className="ml-3 outline-none w-full"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Role */}

          <div className="mb-8">
            <label className="block mb-3 font-medium text-[#4A4A4A]">
              Register As
            </label>

            <div className="flex gap-6 flex-wrap">

              {[
  { label: "Founder", value: "entrepreneur" },
  { label: "Mentor", value: "mentor" },
  { label: "Investor", value: "investor" },
  { label: "Admin", value: "admin" }
].map((item) => (

  <label
    key={item.value}
    className="flex items-center gap-2 cursor-pointer"
  >

    <input
      type="radio"
      value={item.value}
      checked={role === item.value}
      onChange={(e) => setRole(e.target.value)}
    />

    {item.label}

  </label>

))}

            </div>
          </div>

          {/* Register Button */}

          <button onClick={handleRegister}
            className="w-full bg-[#6D8196] text-white py-3 rounded-xl hover:bg-[#4A4A4A] transition"
          >
            Create Account
          </button>

          {/* Login Link */}

          <p className="mt-8 text-center text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-[#6D8196] font-semibold ml-2 hover:underline"
            >
              Login Here
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;