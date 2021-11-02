const linksSocialMedia = {
  github: 'Elionas-dev',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'eli_fernando1',
  twitter: 'maykbrito'
}

// salva o nome de cada classe de li em uma variavel para substituir o link pelo nome da variavel no momento
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// acessa a api do github para pegar as informações do usuario
function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfilesInfos()
