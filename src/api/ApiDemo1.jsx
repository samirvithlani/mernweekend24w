import axios from "axios";
import React, { useState } from "react";
import { CustomLoader } from "../components/CustomLoader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo1 = () => {
  const getApiData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("Res...", res);
    console.log("res", res.data);
    console.log("res", res.data.message);
    console.log("res", res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data);
    setisLoading(false);
  };
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const deleteUser = async (id) => {
    //alert(id)
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log("Res...", res);
    //alert("record deleted..");
    toast.warn('User Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    getApiData();
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {isLoading && <CustomLoader />}
      <button
        onClick={() => {
          getApiData();
        }}
      >
        GET API DATA
      </button>
      {message}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.status ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
