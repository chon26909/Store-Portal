import React from "react";

const ManageUserPage = () => {
  return (
    <div>
      {[...Array(50)].map((_, i) => {
        return <div key={i}>ManageUserPage</div>;
      })}
    </div>
  );
};

export default ManageUserPage;
