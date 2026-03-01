import React from "react";
type GreetingProps = {
  isLoggedIn: boolean;
};
const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  );
};

export default Greeting;
