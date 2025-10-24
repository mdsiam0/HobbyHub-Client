import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobbyhub-server-lyart.vercel.app/groups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          if (data.length === 0) {
            Swal.fire({
              icon: "info",
              title: "No groups found",
              text: "You haven't created any groups yet. Redirecting to create group page.",
              timer: 3000,
              showConfirmButton: false,
            }).then(() => {
              navigate("/create-group");
            });
          }
        });
    }
  }, [user, navigate]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobbyhub-server-lyart.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setGroups(groups.filter((group) => group._id !== id));
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateGroup/${id}`);
  };

  if (groups === null) {
    return <Spinner></Spinner>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 my-10 md:my-25">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        My Created Groups
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Group Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Start Date</th>
              <th className="px-4 py-2 text-left">Max Members</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {groups.length > 0 ? (
              groups.map((group) => (
                <tr key={group._id}>
                  <td className="px-4 py-2">
                    <img
                      src={group.imageUrl}
                      alt={group.groupName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{group.groupName}</td>
                  <td className="px-4 py-2">{group.category}</td>
                  <td className="px-4 py-2">{group.location}</td>
                  <td className="px-4 py-2">{group.startDate}</td>
                  <td className="px-4 py-2">{group.maxMembers}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <button
                        onClick={() => handleUpdate(group._id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  You haven't created any groups yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
