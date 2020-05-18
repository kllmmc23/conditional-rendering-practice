import React from "react";
import Form from "./Form";

var userIsRegistered = true;

export default function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />

    </div>
  );
}


