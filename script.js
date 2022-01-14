function next() {
    currentPath = window.location.pathname
    alert(currentPath)
    if(currentUPath = 'index.html') nextPath = '/index2.html'
    history.pushState('', 'Продолжай', nextPath)
}