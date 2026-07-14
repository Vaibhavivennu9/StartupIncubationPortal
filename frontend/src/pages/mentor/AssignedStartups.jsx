import { useEffect, useState } from "react";
import api from "../../services/api";
import AssignedStartupCard from "../../components/mentor/AssignedStartupCard";

const AssignedStartups = () => {

  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignedStartups();
  }, []);

  const fetchAssignedStartups = async () => {

    try {

      const response = await api.get("/mentor/assigned-startups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setStartups(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <h2 className="text-2xl font-bold">Loading...</h2>;
  }

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Assigned Startups
      </h1>

      {startups.length === 0 ? (
        <h2>No startups assigned.</h2>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">

          {startups.map((startup) => (

            <AssignedStartupCard
              key={startup._id}
              startup={startup}
            />

          ))}

        </div>
      )}

    </div>
  );
};

export default AssignedStartups;