addEventListener("load", (event) => {
  console.log('loaded !')
  const pageTitle = document.createElement('h1')
  pageTitle.innerText = 'WESH'

  document.getElementById('toto').append(pageTitle)
});
