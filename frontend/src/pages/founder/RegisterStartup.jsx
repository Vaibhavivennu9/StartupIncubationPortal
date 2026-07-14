import { useState } from "react";

import api from "../../services/api"
const RegisterStartup = () => {

  const [startup, setStartup] = useState({
    startupName: "",
  description: "",
  industry: "",
  stage: "",
  teamSize: "",
  website: "",
  location: "",
  fundingRequired: "",
  });

  const handleChange = (e) => {
    setStartup({
      ...startup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await api.post(
            "/startups",
            startup,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        alert(response.data.message);

        console.log(response.data);

    } catch (error) {

        console.log(error.response?.data);

        alert(error.response?.data?.message || "Registration Failed");

    }
};
  return (
   <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
  {/* Your form */}


      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-[#4A4A4A] mb-8">
          Register Startup
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="font-semibold">
              Startup Name
            </label>

            <input
              type="text"
              name="startupName"
              value={startup.startupName}
              onChange={handleChange}
              placeholder="Enter Startup Name"
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">
              Startup Domain
            </label>

            <input
              type="text"
              name="industry"
              value={startup.industry}
              onChange={handleChange}
              placeholder="AI, Healthcare, Agriculture..."
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">
              Business Idea
            </label>

            <textarea
              name="description"
              rows="4"
              value={startup.description}
              onChange={handleChange}
              placeholder="Describe your startup idea..."
              className="w-full border rounded-lg p-3 mt-2"
            ></textarea>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">
                Team Size
              </label>

              <input
                type="number"
                name="teamSize"
                value={startup.teamSize}
                onChange={handleChange}
                placeholder="4"
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>
            <div>
  <label className="font-semibold">Website</label>

  <input
    type="text"
    name="website"
    value={startup.website}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 mt-2"
  />
</div>
<div>
  <label className="font-semibold">Location</label>

  <input
    type="text"
    name="location"
    value={startup.location}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 mt-2"
  />
</div>

            <div>

              <label className="font-semibold">
                Funding Requirement
              </label>

              <input
                type="number"
                name="fundingRequired"
                value={startup.fundingRequired}
                onChange={handleChange}
                placeholder="₹10 Lakhs"
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Startup Stage
            </label>

            <select
              name="stage"
              value={startup.stage}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            >

              <option value="">Select Stage</option>
             <option value="Idea">Idea</option>
             <option value="Prototype">Prototype</option>
                 <option value="MVP">MVP</option>
                   <option value="Growth">Growth</option>
                   <option value="Scaling">Scaling</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Business Plan
            </label>

            <textarea
              name="businessPlan"
              rows="5"
              value={startup.businessPlan}
              onChange={handleChange}
              placeholder="Describe your business plan..."
              className="w-full border rounded-lg p-3 mt-2"
            ></textarea>

          </div>

          <button type="submit"
            className="bg-[#6D8196] text-white px-8 py-3 rounded-lg hover:bg-[#4A4A4A] transition"
          >
            Register Startup
          </button>

        </form>

      </div>

    </div>
  );
};

export default RegisterStartup;