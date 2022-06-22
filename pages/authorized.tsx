import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/landing page/navbar/Navbar";

function AuthPage() {
  const { status } = useSession();

  if (status === "loading") {
    <>
      <Navbar></Navbar>
      <p>Loading page..</p>;
    </>;
  }

  if (status !== "authenticated")
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Navbar></Navbar>
        <p style={{ fontSize: "10rem", fontWeight: "bolder", color: "red" }}>
          Theres nothing here... trust me...
        </p>
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Navbar></Navbar>
      <p style={{ fontSize: "10rem", fontWeight: "bolder", color: "red" }}>
        Classified Page
      </p>
    </div>
  );
}

export default AuthPage;
