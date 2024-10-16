import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../components/CustomLoader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ApiDemo1 = () => {
  const getApiData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    setisLoading(false);
    console.log("Res...", res);
    console.log("res", res.data);
    console.log("res", res.data.message);
    console.log("res", res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data);
  };
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [user, setuser] = useState({});
  const [updateShow, setupdateShow] = useState(false);

  const { register, handleSubmit,reset } = useForm({
   defaultValues: user,
  });



  const submitHandler = async(data) => {
    console.log("Data...",data)
    const id = data._id
    try{
    delete data._id
    const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
    console.log("res = ",res)
    }catch(err){
        console.log("Error...",err)
    }
    setupdateShow(false);//pop closer
    getApiData(); //to fetch updated data from api...
}

  const deleteUser = async (id) => {
    //alert(id)
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log("Res...", res);
    //alert("record deleted..");
    toast.warn("User Deleted", {
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

  useEffect(() => {
    getApiData();
  }, []);

  
  const handleShow = async (id) => {
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
    //console.log("Res...", res);
    setuser(res.data.data);
    setshow(true);
  };

  const handleShowUpdate = async (id) => {

    //fetch clicked user data from api...
     const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
    console.log("Res111...", res);
    setuser(res.data.data);
    reset(res.data.data);

    setupdateShow(true);
  };

  const handleClose = () => {
    setshow(false);
  };

  //const [searchquery, setsearchquery] = useState("")
  const searchData = async (event) => {
    console.log(event.target.value);
    const res = await axios.get(`https://node5.onrender.com/user/filter2`, {
      params: {
        name: event.target.value,
      },
    });
    console.log("Res...", res);
    setusers(res.data.data);
  };
  return (
    <div>
      {/* <input type="search"  onChange={(event)=>{setsearchquery(event.target.value)}}/> */}
      {/* {searchquery} */}
      <input type="search" onChange={searchData} />
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
      {/* <button
        onClick={() => {
          getApiData();
        }}
      >
        GET API DATA
      </button> */}
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
                  <Link
                    to={`/updateuser/${user._id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      handleShow(user._id);
                    }}
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                  >
                    info
                  </button>
                  <button
                    onClick={() => {
                      handleShowUpdate(user._id);
                    }}
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                  >
                    update 1
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>User Detail</Modal.Title>
          <button onClick={handleClose}>Close</button>
        </Modal.Header>
        <Modal.Body>
          <h4>User Name ={user.name}</h4>
          <h4>User Email ={user.email}</h4>
          <h4>User Age ={user.age}</h4>
        </Modal.Body>
        <Modal.Footer>
          <p>Footer</p>
        </Modal.Footer>
      </Modal>

      {/* //update model */}
      <Modal show={updateShow}>
        <Modal.Header>
          <Modal.Title>Update User</Modal.Title>
          <button
            onClick={() => {
              setupdateShow(false);
            }}
          >
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label>NAME</label>
              <input type="text" {...register("name")} />
            </div>
            <div>
              <label>AGE</label>
              <input type="text" {...register("age")} />
            </div>
            <div>
              <input type="submit" value="UPDATE" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
