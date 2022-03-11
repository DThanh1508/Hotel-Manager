const Commend_Users = 'https://61bfebc9b25c3a00173f4f54.mockapi.io/comments'

function addcmt() {
    axios(Commend_Users)
        .then(res => {
            for (var cmt of res.data) {
                var html =`<blockquote>
                    <cite>
                    <img class="avatar"src="${cmt.avatar}" alt=""><span class="name-cmt">${cmt.name}</span>
                    </cite>
                    <br> 
                    <div>${cmt.comment}</div>
                </blockquote>`
                document.getElementById("box-cmt").innerHTML += html;
            }
        })
}
addcmt()

function addcomments() {
    var tenhienthi = document.getElementById('tenhienthi').value;
    var avatarcmt = document.getElementById('avatarcmt').value;
    var commend = document.getElementById('commend').value;
    var data = {
        name: tenhienthi,
        avatar: avatarcmt,
        comment: commend
    };
    axios.post(Commend_Users, data).then(() => {
        location.reload();
    });
}