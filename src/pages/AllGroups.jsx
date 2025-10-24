import React from "react";
import { useLoaderData, Link } from "react-router";

const AllGroups = () => {
    const groups = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto p-4 my-10 md:my-25">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">All Hobby Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map((group) => (
                    <div key={group._id} className="bg-base-300 rounded-xl shadow-md p-5">
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full h-40 object-cover rounded mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-1">{group.groupName}</h3>

                        <p className="text-gray-600 text-sm mb-2">
                            <span className="font-medium text-gray-700">Category:</span> {group.category}
                        </p>

                        <p className="text-gray-700 text-sm">
                            <span className="font-medium text-gray-700">Start Date:</span>{" "}
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
        </div>
    );
};

export default AllGroups;
