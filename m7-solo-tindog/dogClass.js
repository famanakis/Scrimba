class Dog {
    constructor(data) {
        Object.assign(this, data)
        }
        
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    dogHtml() {
        const {avatar, name, age, bio} = this
        return`
            <img id="likeBadge" class="badge like" src="images/badge-like.png">
            <img id="rejectBadge" class="badge nope" src="images/badge-nope.png">
            <div class="bio-div">
                <img class="avatar" src="${avatar}">
                <div class="dog-info">
                <p class="name">${name}, ${age}<p>
                <p class="bio">${bio}</p>
                </div>
            </div>
            `
        }
}

export default Dog