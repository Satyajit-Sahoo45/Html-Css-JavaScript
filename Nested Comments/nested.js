let commentContainer = document.getElementById('comment-container');

function createInputBox() {
    let div = document.createElement("div");

    div.innerHTML += `
    <div class="comment-details">
        <input class="input" type="text" placeholder="add text here" />
        <button class="btn submit"> SUBMIT </button>
    </div> `;

    return div;
}

function addReply(text) {
    let div = document.createElement("div");

    div.setAttribute("class", "all-comment");

    div.innerHTML += `
        <div class="card">
            <span class="text"> ${text} </span>
            <span id="reply" class="reply"> 
                Add Reply 
            </span>
        </div> ` ;

    return div;
}

commentContainer.addEventListener("click", function (e) {
    let replyClicked = e.target.classList.contains("reply");
    // console.log(replyClicked);
    let submitClicked = e.target.classList.contains("submit");
    // console.log(submitClicked);
    let closestCard = e.target.closest(".all-comment");
    // console.log(closestCard);

    if (replyClicked) {
        // add input box
        closestCard.appendChild(createInputBox());
    }

    if (submitClicked) {
        //add reply card
        const commentDetails = e.target.closest(".comment-details");
        if(commentDetails.children[0].value){
            closestCard.appendChild(addReply(commentDetails.children[0].value));
            commentDetails.remove();
        }
    }

});