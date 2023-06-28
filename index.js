const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// DOM
const likesEl = document.getElementById("likes")
const likesBtnEl = document.getElementById("likes-btn")
const likesImgBtnEl = document.getElementById("img-btn")


let countLikes = 21492
likesBtnEl.addEventListener("click", function() {
         countLikes += 1
        likesEl.textContent =  countLikes.toLocaleString()
})

likesImgBtnEl.addEventListener("dblclick", function() {
    countLikes += 1
    likesEl.textContent =  countLikes.toLocaleString()
})