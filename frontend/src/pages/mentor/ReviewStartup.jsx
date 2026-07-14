import { useEffect, useState } from "react";
import api from "../../services/api";

const ReviewStartup = () => {

  const [startup, setStartup] = useState(null);
  const [review, setReview] = useState("");

  useEffect(() => {
    fetchAssignedStartup();
  }, []);

  const fetchAssignedStartup = async () => {

    try {

      const response = await api.get("/mentor/assigned-startups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.length > 0) {
        setStartup(response.data[0]); // first assigned startup
      }

    } catch (error) {

      console.log(error);

    }

  };

  const submitReview = async (status) => {

    try {

      await api.put(
        `/mentor/review/${startup._id}`,
        {
          feedback: review,
          reviewStatus: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(`Startup ${status} Successfully`);

    } catch (error) {

      console.log(error);

      alert("Failed to submit review");

    }

  };

  if (!startup) {
    return (
      <h2 className="text-2xl font-bold p-8">
        No Startup Assigned
      </h2>
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Review Startup
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-[#6D8196] mb-6">
          {startup.startupName}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Founder</p>
            <p className="font-semibold">
              {startup.createdBy?.name}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Industry</p>
            <p className="font-semibold">
              {startup.industry}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Funding Required</p>
            <p className="font-semibold">
              ₹{startup.fundingRequired}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Current Stage</p>
            <p className="font-semibold">
              {startup.stage}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold mb-3">
            Description
          </h3>

          <p className="text-gray-700 leading-7">
            {startup.description}
          </p>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">

        <h2 className="text-xl font-bold mb-4">
          Mentor Feedback
        </h2>

        <textarea
          rows="6"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your feedback..."
          className="w-full border rounded-lg p-4"
        />

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => submitReview("Approved")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Approve
        </button>

        <button
          onClick={() => submitReview("Rejected")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Reject
        </button>

      </div>

    </div>
  );
};

export default ReviewStartup;