import React, { useState } from "react";
import UserTable from "./UserTable";

function Table() {

  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "username",
      label: "Username",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "action",
      label: "Action",
    },
  ];

  const handleDelete = () => {};
  const data = [
    {
      id: 1,
      name: "Nikhil Dasari",
      email: "email@gmail.com",
      username: "nikhil.dasari",
      roles: [{ name: "Admin" }, { name: "Writer" }],
    },
    {
      id: 2,
      name: "Example2",
      email: "ex2@gmail.com",
      username: "example2",
      roles: [{ name: "Editor" }],
    },
    {
      id: 3,
      name: "Example3",
      email: "ex3@gmail.com",
      username: "example3",
      roles: [{ name: "Writer" }],
    },
  ];
  return (
    <>
        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
    </>
  );
}

export default Table;
