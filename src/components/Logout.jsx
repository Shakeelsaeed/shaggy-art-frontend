import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Logout = () => {
  const history = useHistory();
  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401 || !res) {
        toast.warning("Please Logout later");
        // window.alert("Please Logout later")
      } else {
        toast.success("Logged-out Successfully");
        setTimeout(() => {
          history.push("/");
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      toast.error("Internal Server error");
    }
  };
  useEffect(() => {
    logout();
  });

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Logout;
