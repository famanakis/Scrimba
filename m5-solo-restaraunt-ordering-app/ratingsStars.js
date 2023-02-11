export function handleRating(stars) {
    const starClassActive = "rating-star orange fa-solid fa-star"
    const starClassInactive = "rating-star fa-solid fa-star"
    const starsLength = stars.length
    let i
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star)
            if(star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive
            }
        }
    })
}
