document.querySelector(".feedback-form").addEventListener("input",(function(e){var t={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value};console.log(t),localStorage.setItem("form-data",JSON.stringify(t))}));
//# sourceMappingURL=03-feedback.275762b7.js.map
