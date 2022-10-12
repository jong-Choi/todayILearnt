import authService from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

// useHistory 변경점 : https://blog.woolta.com/categories/1/posts/211
function Profile() {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/"); // 푸쉬를 대체
    // navigate('/home', {replace: true}); 리플레이스를 대체
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}

export default Profile;
