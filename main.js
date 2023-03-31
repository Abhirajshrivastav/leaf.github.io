function showImages() 
 {
    document.querySelectorAll(".leaf-div > div > img").forEach((el) => {
      el.addEventListener("load", () => {
        el.style.display = "block";
      });
    });
  }
  
  // Call the function when the document is ready
  document.addEventListener("DOMContentLoaded", showImages);