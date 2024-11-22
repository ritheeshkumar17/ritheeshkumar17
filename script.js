
function pressKey(key) {
    const display = document.getElementById("calc-display");
    if (key === "C") {
      display.value = "";
    } else {
      display.value += key;
    }
  }
  
  function calculate() {
    const display = document.getElementById("calc-display");
    try {
      display.value = eval(display.value); 
    } catch {
      display.value = "Error";
    }
  }
  
  function redirect() {
    const url = document.getElementById("url-input").value;
    const iframe = document.getElementById("redirect-iframe");
    if (url) {
      iframe.src = url;
    } else {
      alert("Please enter a valid URL.");
    }
  }
  
  function searchGoogle() {
    const query = document.getElementById("search-box").value;
    if (query) {
      const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(googleSearchURL, "_blank");
    } else {
      alert("Please enter a search term.");
    }
  }
  