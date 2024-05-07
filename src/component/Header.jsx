import { useState } from "react";

const Title = () => (
  <img
    alt="logo"
    className="img"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRBo2Gu8QiZ9EY4uJPUVwmPZeuHtLSsJFPg&s"
  />
);

export const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Conatct</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Title;
