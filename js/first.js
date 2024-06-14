console.log("first file");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = "white";
secondSection.style.backgroundColor = "tomato";
secondSection.style.paddingLeft = "30px";

//document.querySelectorAll   ----> node list debe
//document.querySelector      ---->  protom maching gula debe
