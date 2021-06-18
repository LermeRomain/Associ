<template>
  <container>
    <iframe width="100%" height="100%" src="https://b01bfbbf.sibforms.com/serve/MUIEAGKudq4vcHC-QJ_VBnTtF5Y-0UwrJE_G3sTlGGVUx1cbLeAALQ6afe7qxSuqkyTb94mjNxDsl1nOh-WPsSwfD7D828AZO6kx2QGv7oCHPmQ8CX-PuIeScnUx6Q30rc-KvH-HtzfVuXh9Dk4HeDsoFzZBBFL9WK7vKVUN8rql763LqUVFzKC6I8w4wdZYRUYfsh1kt0bLyqMn" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
  </container>
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
            alert("Vous êtes bien inscrit sur la Newsletter");
          }, (error) => {
            console.log('FAILED...', error);
          });
    }
  }
}
</script>
<script>
export default {
  name:'Login'

}
</script>

<style scoped>
* {box-sizing: border-box;}

container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  height: 650px;
  margin-top: 40%;
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
