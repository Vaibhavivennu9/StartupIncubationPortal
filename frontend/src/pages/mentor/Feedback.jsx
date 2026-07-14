import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    startup: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Feedback Submitted Successfully!");

    console.log(feedback);
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Startup Feedback
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Startup */}

          <div>
            <label className="block mb-2 font-semibold">
              Startup
            </label>

            <select
              name="startup"
              value={feedback.startup}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Startup</option>
              <option>AgriTech AI</option>
              <option>HealthTech Plus</option>
              <option>EduConnect</option>
            </select>
          </div>

          {/* Rating */}

          <div>
            <label className="block mb-2 font-semibold">
              Rating
            </label>

            <select
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Choose Rating</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Needs Improvement</option>
            </select>
          </div>

          {/* Comments */}

          <div>
            <label className="block mb-2 font-semibold">
              Comments
            </label>

            <textarea
              name="comments"
              rows="6"
              value={feedback.comments}
              onChange={handleChange}
              className="w-full border rounded-lg p-4"
              placeholder="Write your feedback here..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#6D8196] text-white px-8 py-3 rounded-lg hover:bg-[#4A4A4A]"
          >
            Submit Feedback
          </button>

        </form>

      </div>

    </div>
  );
};

export default Feedback;