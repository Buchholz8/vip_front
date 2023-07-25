<template>
    <div>
      <footer>

            <a href="https://github.com/Buchholz8/vip" target="_blank">Backend GitHub</a>

            <a href="https://github.com/Buchholz8/vip_front" target="_blank">Frontend GitHub</a>

            <a href="https://www.linkedin.com/in/mark-buchholz-802896269/" target="_blank">LinkedIn</a>

            <p>markbuchholz8@gmail.com</p>

      </footer>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
footer{
display: grid; 
grid-template-columns: 1fr 1fr;
font-size: 18px;
}
p{
color: rgb(114, 30, 192);
}
footer a {
    color: rgb(114, 30, 192);
    text-decoration: none;
}
  </style>