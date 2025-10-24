import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Spinner from "./Spinner";
import { Fade, Slide } from "react-awesome-reveal";

const Featured = () => {
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedGroups = async () => {
      try {
        const res = await axios.get("https://hobbyhub-server-lyart.vercel.app/featuredGroups");
        setFeaturedGroups(res.data);
      } catch (error) {
        console.error("Failed to fetch featured groups", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedGroups();
  }, []);

  if (loading) return <Spinner />;

  if (featuredGroups.length === 0) {
    return (
      <div className="text-center py-10 text-lg font-medium text-red-500">
        No ongoing groups found.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-4 my-20">
      <Fade direction="down" triggerOnce>
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Featured Groups
        </h2>
      </Fade>

      <Slide cascade damping={0.15} direction="up" triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGroups.map((group) => (
            <div
              key={group._id}
              className="bg-base-300  rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow text-base-content"
            >
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold mb-1">
                {group.groupName}
              </h3>

              <p className="text-base-content/80 text-sm mb-2">
                <span className="font-medium">Category:</span> {group.category}
              </p>

              <p className="text-base-content text-sm mb-1">
                <span className="font-medium">Start Date:</span>{" "}
                {group.startDate}
              </p>

              <p className="text-base-content text-sm">
                <span className="font-medium">Location:</span>{" "}
                {group.location}
              </p>

              <div className="mt-4 flex justify-center">
                <Link to={`/groups/${group._id}`}>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Featured;
