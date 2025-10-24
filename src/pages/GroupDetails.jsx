import React from "react";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
    const group = useLoaderData();

    const isPastDate = new Date(group.startDate) < new Date();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-300 rounded shadow my-20">
            <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full object-contain rounded mb-4"
            />




            <h2 className="text-3xl font-bold mb-2 text-indigo-700">
                {group.groupName}
            </h2>

            <p><span className="font-semibold">Category:</span> {group.category}</p>
            <p><span className="font-semibold">Description:</span> {group.description}</p>
            <p><span className="font-semibold">Location:</span> {group.location}</p>
            <p><span className="font-semibold">Max Members:</span> {group.maxMembers}</p>
            <p><span className="font-semibold">Start Date:</span> {group.startDate}</p>
            <p><span className="font-semibold">Created By:</span> {group.userName} ({group.userEmail})</p>

            <div className="mt-6 text-center">
                {isPastDate ? (
                    <p className="text-red-600 text-lg font-semibold">
                        This group is no longer active.
                    </p>
                ) : (
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-lg"
                        onClick={() => alert("Join Group successfully!")}
                    >
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
};

export default GroupDetails;
