const imgTag = document.querySelector(".project-image");
const projectHeadingTag = document.querySelector(".p-heading");
const projectDescriptionTag = document.querySelector(".p-description");
const buttons = {
  seeLiveBtn: document.querySelector(".see-live"),
  sourceCode: document.querySelector(".source-code"),
};
let value = 0;

const dataHandler = ({ img, title, description, liveUrl, sourceCodeUrl }) => {
  imgTag.src = img;
  projectHeadingTag.textContent = title;
  projectDescriptionTag.textContent = description;
  buttons.seeLiveBtn.href = liveUrl;
  buttons.sourceCode.href = sourceCodeUrl;
};

document.querySelector(".left").addEventListener("click", () => {
  value = (projectData.length + value - 1) % projectData.length;
  dataHandler(projectData[value]);
});
document.querySelector(".right").addEventListener("click", () => {
  value = (value + 1) % projectData.length;
  dataHandler(projectData[value]);
});
