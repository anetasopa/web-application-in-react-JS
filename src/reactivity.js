export const ReactivityDOM = (function() {
    function render(child) {  
      const app = document.getElementById("app");
      veryUnsecureFunction();
  
      app.insertAdjacentHTML(
        "beforeend", 
        child
      ); 
    }

    function veryUnsecureFunction() {
      console.log("Unsecure function");
    }

    return {
      render
    }
})()

// This is my tiny example framework, I can call ReactivityDOM
// Framework decides the rules how to work with framework, 
// what functions are accesible (API)
// Benefits: easier to work, to collaborate, faster to develop,
// I can focus on bussines logic of your app instead of handling DOM or html elements