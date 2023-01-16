
import React from 'react';




export default function ContactForm () {
  
  return (
    <form action="/api/form" method="POST">
      
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." required minLength="3" />

      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."  required minLength="4"/>

      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required />

      <label htmlFor="subject">Subject</label>
      <select name="selectfrlowers" id="selectflowers">
        <option value="rose">Roses</option>
        <option value="lily">Lilys</option>
        <option value="tulip">Tulips</option>
        <option value="petunia">Petunias</option>
      </select>

      <label htmlFor="Message">Message</label>
      <textarea id="message" 
                name="message" 
                rows="4" 
                cols="50" 
                required minLength="10" 
                defaultValue="Write your message here..."/>
      <button type="submit">Send</button>
   </form>
  )
}
