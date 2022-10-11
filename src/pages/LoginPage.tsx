import { useEffect, useRef, useState } from "react";

const LoginPage = () => {
  // const username = useRef(null);
  // const password = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // console.log("username", username.current);
    // console.log("password", password.current);
  };

  useEffect(() => {
    console.log("Rerender");
  }, []);

  return (
    <div>
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* <input type="password" id="password" ref={password} /> */}
      <button onClick={onLogin}>login</button>
    </div>
  );
};
export default LoginPage;
