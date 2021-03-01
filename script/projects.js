class Project {
    constructor(img, title, description, liveUrl, sourceCodeUrl) {
        this.img = img;
        this.title = title;
        this.description = description;
        this.liveUrl = liveUrl;
        this.sourceCodeUrl = sourceCodeUrl;
    }

    projectWrapper () {
        let wrapperDiv = document.createElement("div");
        let pImg = document.createElement("img");
        let aboutDiv = document.createElement("div");
        let pTitle = document.createElement("h3");
        let pDescription = document.createElement("p");

        wrapperDiv.classList.add("project-wrapper");
        pImg.setAttribute("src", `${this.img}`);
        aboutDiv.classList.add("project-about");
        pTitle.classList.add("p-heading");
        pTitle.textContent = this.title;
        pDescription.classList.add("p-description");
        pDescription.textContent = this.description;

        aboutDiv.appendChild(pTitle);
        aboutDiv.appendChild(pDescription);

        wrapperDiv.appendChild(pImg);
        wrapperDiv.appendChild(aboutDiv);

        return wrapperDiv;
    }

    makeProjectSlide() {
        let slidesUl = document.querySelector(".glide__slides");
        let slideLi = document.createElement("li");
        slideLi.classList.add("glide__slide");
        slideLi.appendChild(this.projectWrapper());
        slidesUl.appendChild(slideLi);
    }

    makeBullet (index) {
        let bulletsDiv = document.querySelector(".glide__bullets");
            let bulletButton = document.createElement("button");
            bulletButton.classList.add("glide__bullet");
            bulletButton.setAttribute("data-glide-dir", `${index}`);
            bulletsDiv.appendChild(bulletButton);
    }
}

var i = 0;
projectData.forEach(project => {
    const newProject = new Project(project.img, project.title, project.description, project.liveUrl, project.sourceCodeUrl);
    newProject.makeProjectSlide();
    newProject.makeBullet(i++);
});