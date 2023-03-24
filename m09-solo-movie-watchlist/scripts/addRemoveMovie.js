export function addRemoveMovie(e, storedMovies) {
    const targetEl = document.getElementById(e.target.dataset.imdbid)
    if (targetEl != null && targetEl) {
        if (!storedMovies.includes(e.target.dataset.imdbid)) {
            storedMovies.push(e.target.dataset.imdbid)
            targetEl.classList.add('minus')
            targetEl.classList.remove('plus')  
            } else {
                const removeMovie = storedMovies.findIndex(movie => movie === e.target.dataset.imdbid)
                storedMovies.splice(removeMovie, 1)
                targetEl.classList.add('plus')
                targetEl.classList.remove('minus')
        }
    localStorage.setItem("movieID", JSON.stringify(storedMovies))
    }
}
