import React from "react";
import { Button } from "@material-ui/core";

export default function Contact(props) {
  // console.log( 'contact props', props)
  return (
    <div>
      <form
        className="gavforms"
        action="https://formspree.io/xgeyzgpb"
        target="_blank"
        method="POST"
        encType="multipart/form-data"
      >
        <label className="gavlabels">Full Name: </label>
        <input
          className="gavinputs"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <label className="gavlabels">Enter Your Email: </label>
        <input
          className="gavinputs"
          type="text"
          name="_replyto"
          required
          placeholder="JohnSmith@email.com"
        />
        <label className="gavlabels">Enter Your Message: </label>
        <textarea
        placeholder="Feedback, comments, suggestions."
          cols="7"
          rows="7"
          name="message"
          required
          className="gavinputs"
        />

        <label className="gavlabels">Attach a file: </label>
        <input className="gavfile" type="file" name="upload" />

        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
