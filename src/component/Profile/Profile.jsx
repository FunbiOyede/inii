import React from "react";
import Hoc from "../../HOC/hoc";
import Navigation from "../Navigation/Navigation";
const Profile = props => (
  <Hoc>
    <Navigation />
    <h3>Profile Page</h3>
  </Hoc>
);

export default Profile;
