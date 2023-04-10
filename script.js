const applyButton = document.getElementById("apply-button");

const paragraph = document.getElementById("paragraph");

 

applyButton.addEventListener("click", () => {

  const textColor = document.getElementById("text-color").value;

  const borderColor = document.getElementById("border-color").value;

  const borderWidth = document.getElementById("border-width").value;

 

  paragraph.style.color = textColor;

  paragraph.style.borderColor = borderColor;

  paragraph.style.borderWidth = borderWidth + "px";

});
