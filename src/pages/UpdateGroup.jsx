import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const UpdateGroup = () => {
  const group = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = group;

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  const handleUpdateGroup = (e) => {
  e.preventDefault();
  const form = e.target;
  const updatedGroup = {
    groupName: form.groupName.value,
    category: form.category.value,
    description: form.description.value,
    location: form.location.value,
    maxMembers: form.maxMembers.value,
    startDate: form.startDate.value,
    imageUrl: form.imageUrl.value,
  };

  fetch(`https://hobbyhub-server-lyart.vercel.app/groups/${_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatedGroup),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
       toast.success('Group updated successfully!');
        
          navigate("/my-groups");
        
      }
    })
    .catch(() => {
      Swal.fire("Error", "Failed to update the group.", "error");
    });
};



  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-300 shadow-lg rounded-lg my-10 md:my-25">

  
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Update Group
      </h2>
      <form onSubmit={handleUpdateGroup} className="space-y-4">
        <input
          type="text"
          name="groupName"
          defaultValue={groupName}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <select
          name="category"
          required
          defaultValue={category}
          className="w-full border px-3 py-2 rounded"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          defaultValue={description}
          rows="3"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="location"
          defaultValue={location}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="number"
          name="maxMembers"
          defaultValue={maxMembers}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="date"
          name="startDate"
          defaultValue={startDate}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="imageUrl"
          defaultValue={imageUrl}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="userName"
          value={userName}
          readOnly
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          name="userEmail"
          value={userEmail}
          readOnly
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full"
        >
          Update Group
        </button>
      </form>
    </div>
  );
};

export default UpdateGroup;
