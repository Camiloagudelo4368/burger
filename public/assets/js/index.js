$(document).on("click", ".btnDevour", event => {
    event.preventDefault();

    var id = $(event.target).data('id');
    console.log(id)
    $.ajax({
        method: "PUT",
        url: "/api/burger/" + id,
        data: id
    }).then(result => {
        location.reload();
    })
})

$(document).on("click", ".btnDelete", event => {
    event.preventDefault();

    var id = $(event.target).data('id');
    console.log(id)
    $.ajax({
        method: "DELETE",
        url: "/api/burger/" + id,
        data: id
    }).then(result => {
        location.reload();
    })
})