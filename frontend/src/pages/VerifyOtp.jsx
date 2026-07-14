import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaKey, FaRocket } from "react-icons/fa";
import api from "../services/api";

const VerifyOtp = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [email] = useState(location.state?.email || "");
    const [otp, setOtp] = useState("");

    const handleVerify = async () => {

        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        try {

            const response = await api.post("/auth/verify-otp", {
                email,
                otp
            });

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message || "OTP Verification Failed"
            );

        }

    };

    return (

        <div className="min-h-screen bg-[#FFFFE3] flex items-center justify-center px-4">

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

                {/* Left */}

                <div className="bg-[#6D8196] text-white flex flex-col justify-center items-center p-10">

                    <div className="bg-white text-[#6D8196] p-5 rounded-full mb-6">
                        <FaRocket size={50} />
                    </div>

                    <h1 className="text-4xl font-bold mb-4">
                        Verify Email
                    </h1>

                    <p className="text-center text-lg leading-8">
                        Enter the OTP sent to your registered email.
                    </p>

                </div>

                {/* Right */}

                <div className="p-10">

                    <h2 className="text-3xl font-bold text-[#4A4A4A] mb-2">
                        Verify OTP
                    </h2>

                    <p className="text-gray-500 mb-8">
                        Enter the OTP below
                    </p>

                    {/* Email */}

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <div className="flex items-center border rounded-xl px-4 py-3">

                            <FaEnvelope className="text-[#6D8196]" />

                            <input
                                type="email"
                                value={email}
                                readOnly
                                className="ml-3 outline-none w-full bg-white"
                            />

                        </div>

                    </div>

                    {/* OTP */}

                    <div className="mb-8">

                        <label className="block mb-2 font-medium">
                            OTP
                        </label>

                        <div className="flex items-center border rounded-xl px-4 py-3">

                            <FaKey className="text-[#6D8196]" />

                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="ml-3 outline-none w-full"
                            />

                        </div>

                    </div>

                    <button
                        onClick={handleVerify}
                        className="w-full bg-[#6D8196] text-white py-3 rounded-xl hover:bg-[#4A4A4A]"
                    >
                        Verify OTP
                    </button>

                </div>

            </div>

        </div>

    );

};

export default VerifyOtp;