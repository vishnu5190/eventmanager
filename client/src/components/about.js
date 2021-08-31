import { Auth0Context } from "@auth0/auth0-react";
import React from "react";

const About = () => {
  return (
    <section>
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
        {" "}
        Developed By: Vishnu Kumar{" "}
      </h4>
      <p style={{ textAlign: "center" }}>
        <a href="https://github.com/vishnu5190">
          GitHub Source Code{" "}
        </a>
      </p>
    </section>
  );
};
export default About;
