<template>
  <div class="container" @submit.prevent="sendEmail">
    <form>
      <label>Name</label>
      <input
          type="text"
          name="from_name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          name="from_email"
          placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('default_service', 'template_a3dcm1w', e.target,
          'user_ktMAhXA7PImUgySAh1SCN')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("c bon");
          }, (error) => {
            console.log('FAILED...', error);
          });
    }
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
