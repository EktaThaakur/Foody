function Greeting(props) {
  // const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {props.isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}

export default Greeting;
