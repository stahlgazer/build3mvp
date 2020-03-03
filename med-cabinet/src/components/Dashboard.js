import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Dashboard(props) {
  // console.log( 'dashboard props', props)

  axiosWithAuth()
    .get(`/users/${localStorage.getItem('ID')}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div>
    
    </div>
  );
}
