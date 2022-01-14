function next() {
    currentUrl = window.location.href
    alert(currentUrl)
    if(currentUrl = 'index.html') nextUrl = '/index2.html'
    history.pushState('', 'Продолжай', nextUrl)
}