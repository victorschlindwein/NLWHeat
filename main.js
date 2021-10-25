const socialMediaLinks = {
  github: 'victorschlindwein',
  instagram: 'victorschlindwein',
  twitter: 'ralf_stifs',
  youtube: 'CortesdoCasimitoOFICIAL',
  facebook: 'victorschlindwein'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.name),
        (userBio.textContent = data.bio),
        (userLink.href = data.html_url),
        (userLogin.textContent = data.login),
        (userImage.src = data.avatar_url)
    })
}

getGitHubInfos()
