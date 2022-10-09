
var repo_url = 'https://api.github.com/users/jvs-dev/repos'
var repo_obj = await(await fetch(repo_url)).json();
var view_all = document.getElementById("view_all")
var section_repositories = document.getElementById("git_repositories")

function load_repos() {
  let number_obj = 0

  while (number_obj < 2) {
    let article = document.createElement("article")
    section_repositories.insertAdjacentElement("beforeend", article)
    article.classList.add("rightsection__card")
    article.classList.add("card--repositories")
    article.classList.add("active")
    function thisdescription() {
      if (repo_obj[number_obj].description == null) {
        return "this repository not have a description :("
      } else {
        return repo_obj[number_obj].description
      }
    }

    function tech_color() {
      if (repo_obj[number_obj].language == "HTML") {
        return "#e34c26"
      }
      if (repo_obj[number_obj].language == "CSS") {
        return "#6500ff"
      }
      if (repo_obj[number_obj].language == "JavaScript") {
        return "#f1e05a"
      }
    }

    article.innerHTML = `
    <div class="flex-row-center">
                        <ion-icon class="repositories__icon--folder" name="folder-outline"></ion-icon>
                        <a class="repositories__a link" href="${repo_obj[number_obj].html_url}"><h3 class="repositories__h3">${repo_obj[number_obj].name}</h3></a>
                    </div>
                    <p class="repositories__p">${thisdescription()}</p>
                    <div class="flex-spacebetween">
                        <div class="flex-spacebetween">
                            <div class="flex-spacebetween">
                                <ion-icon class="repositories__icon" name="star-outline"></ion-icon>
                                <span class="repositories__numberofbranchsandstars">${repo_obj[number_obj].stargazers_count}</span>
                            </div>
                            <div class="flex-spacebetween margin-left">
                                <ion-icon class="repositories__icon" name="eye-outline"></ion-icon>
                                <span class="repositories__numberofbranchsandstars">${repo_obj[number_obj].watchers}</span>
                            </div>
                        </div>
                        <span class="repositories__tech">
                            <div class="tech__background-color">
                                <div class="tech__color" style="background-color: ${tech_color()};"></div>
                            </div>
                            ${repo_obj[number_obj].language}
                        </span>
                    </div>
    `
    number_obj = number_obj + 1
  }
}

view_all.onclick = function load_all_repos() {
  if (view_all.textContent == "Veja todos") {
    section_repositories.innerHTML=""
    let number_obj = 0

    while (number_obj < repo_obj.length - 2) {
      let article = document.createElement("article")
      section_repositories.insertAdjacentElement("beforeend", article)
      article.classList.add("rightsection__card")
      article.classList.add("card--repositories")
      function thisdescription() {
        if (repo_obj[number_obj].description == null) {
          return "this repository not have a description :("
        } else {
          return repo_obj[number_obj].description
        }
      }

      function tech_color() {
        if (repo_obj[number_obj].language == "HTML") {
          return "#e34c26"
        }
        if (repo_obj[number_obj].language == "CSS") {
          return "#6500ff"
        }
        if (repo_obj[number_obj].language == "JavaScript") {
          return "#f1e05a"
        }
      }

      article.innerHTML = `
    <div class="flex-row-center">
                        <ion-icon class="repositories__icon--folder" name="folder-outline"></ion-icon>
                        <a class="repositories__a link" href="${repo_obj[number_obj].html_url}"><h3 class="repositories__h3">${repo_obj[number_obj].name}</h3></a>
                    </div>
                    <p class="repositories__p">${thisdescription()}</p>
                    <div class="flex-spacebetween">
                        <div class="flex-spacebetween">
                            <div class="flex-spacebetween">
                                <ion-icon class="repositories__icon" name="star-outline"></ion-icon>
                                <span class="repositories__numberofbranchsandstars">${repo_obj[number_obj].stargazers_count}</span>
                            </div>
                            <div class="flex-spacebetween margin-left">
                                <ion-icon class="repositories__icon" name="eye-outline"></ion-icon>
                                <span class="repositories__numberofbranchsandstars">${repo_obj[number_obj].watchers}</span>
                            </div>
                        </div>
                        <span class="repositories__tech">
                            <div class="tech__background-color">
                                <div class="tech__color" style="background-color: ${tech_color()};"></div>
                            </div>
                            ${repo_obj[number_obj].language}
                        </span>
                    </div>
    `
      view_all.textContent = "Veja menos"
      setTimeout(() => {
        article.classList.add("active")
      }, 1);
      number_obj = number_obj + 1
    }
  } else {
    section_repositories.innerHTML=""
    load_repos()
    view_all.textContent = "Veja todos"
  }
}

load_repos()

