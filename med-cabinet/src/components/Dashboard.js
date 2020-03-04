import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "@material-ui/core";

export default function Dashboard(props) {
  // console.log( 'dashboard props', props)
  const [preferences, setPreferences] = useState({
    id: 0,
    username: "",
    password: "",
    email: "",
    medicinalUse: false,
    tolerance: 0,
    medicalConditions: "",
    desiredEffect: ""
  });
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setChange(false);
    axiosWithAuth()
      .get(`/users/${localStorage.getItem("ID")}`)
      .then(response => {
        console.log("user data get request 1", response.data);
        setPreferences(response.data);
      })
      .catch(error => {
        console.log("error updating user get request:", error);
      });
  }, [change]);

  // console.log( "user preferences 3: ", preferences);

  const handleChange = event => {
    setPreferences({ ...preferences, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    setChange(true);
    event.preventDefault();
    preferences.tolerance = Number(preferences.tolerance);
    console.log(preferences, "preferences at time of post 4");

    axiosWithAuth()
      .put(`/users/${localStorage.getItem("ID")}`, preferences)
      .then(response => {
        console.log("Successful update: ", response.data);
      })
      .catch(err => {
        setError("Cannot Update Preferences, Please Try Again Later");
        console.log(err);
        console.log("update failed for:", preferences, err);
      });
  };

  return (
    <div>
      <h2 className="gavforms">{preferences.username} Dashboard</h2>
      <form className="gavforms" onSubmit={handleSubmit} name="register">
        <h3>Update Your Preferences</h3>
        <label>Recreational or Medical Use: </label>
        <select
          className="gavinputs"
          name="medicinalUse"
          value={preferences.medicinalUse}
          onChange={handleChange}
        >
          <option name="medicinalUse" value={false}>
            Recreational
          </option>
          <option name="medicinalUse" value={true}>
            Medicinal
          </option>
        </select>

        <label htmlFor="tolerance">Tolerance Level: </label>
        <select
          required
          className="gavinputs"
          name="tolerance"
          value={preferences.tolerance}
          onChange={handleChange}
        >
          <option name="tolerance" value={0}>
            None
          </option>
          <option name="tolerance" value={1}>
            Beginner
          </option>
          <option name="tolerance" value={2}>
            Intermediate
          </option>
          <option name="tolerance" value={3}>
            Regular
          </option>
          <option name="tolerance" value={4}>
            High
          </option>
        </select>

        <label htmlFor="medicalConditions">Medical Conditions: </label>
        <input
          className="gavinputs"
          type="text"
          name="medicalConditions"
          placeholder="List anything that should be taken into consideration"
          value={preferences.medicalConditions}
          onChange={handleChange}
        />

        <label htmlFor="desiredEffect">Desired Effect: </label>
        <input
          required
          className="gavinputs"
          type="text"
          name="desiredEffect"
          placeholder="Pain Relief, Sleep, Release Stress, Depressant"
          value={preferences.desiredEffect}
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" type="submit">
          update
        </Button>
        {error && <p>{error}</p>}
      </form>

      {/* display saved favorites and add delete favorites */}
    </div>
  );
}
