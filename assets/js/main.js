// Simple confirmation for contact form

document.querySelector("form")?.addEventListener("submit", function(e) {
    
    e.preventDefault();

    alert("Message sent successfully!!!");

});