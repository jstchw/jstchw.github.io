function next() {
    currentUrl = window.location.href
    if(currentUrl = 'index.html') nextUrl = '/index2.html'
    history.replaceState('', 'Продолжай', nextUrl)
}