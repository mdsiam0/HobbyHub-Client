import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const CreateGroupForm = () => {
    const { user } = useContext(AuthContext);

    const handleAddGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());
        newGroup.userName = user?.displayName || "";
        newGroup.userEmail = user?.email || "";
        // console.log(newGroup);
        fetch('https://hobbyhub-server-lyart.vercel.app/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                //  console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Group created successfully!",
                        showConfirmButton: true,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    };

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

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-300 shadow-lg rounded-lg my-10 md:my-25">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                Create a New Group
            </h2>
            <form onSubmit={handleAddGroup} className="space-y-4">
                <input
                    type="text"
                    name="groupName"
                    placeholder="Group Name"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <select
                    name="category"
                    required
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Select Hobby Category</option>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <textarea
                    name="description"
                    placeholder="Description"
                    rows="3"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Meeting Location"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="number"
                    name="maxMembers"
                    placeholder="Max Members"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="date"
                    name="startDate"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                
                <input
                    type="text"
                    name="userName"
                    value={user?.displayName || ""}
                    readOnly
                    className="w-full border px-3 py-2 rounded"
                />

                
                <input
                    type="email"
                    name="userEmail"
                    value={user?.email || ""}
                    readOnly
                    className="w-full border px-3 py-2 rounded "
                />

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full"
                >
                    Create Group
                </button>
            </form>
        </div>
    );
};

export default CreateGroupForm;
