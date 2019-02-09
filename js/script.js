/*$(()=>{
   $(".add").click(()=>{
       $(".list").append($(`<li>${$('.input').val()}</li>`))
   })
})*/

$(()=>{
    $("body")
        .append('<input id="input" type="text">')
        .append('<button id="addtask">Add Task</button>')
        .append('<ul id="tasklist"></ul>')
          $("#addtask").click(()=>{
            $("#tasklist")
              .append(
                  $(`<li></li>`)
                    .append(`${$("#input").val()}`)
                    .append(
                           $(`<button>❌</button>`).click((e)=>{
                               $(e.target.parentNode).remove()
                           })
                        )
                       
                    .append($(`<button >⬇</button>`).click((e)=>{
                        $(e.target.parentElement).insertAfter($(e.target.parentElement).next());
                    })     
                    )
                    .append($(`<button >⬇</button>`).click((e)=>{
                        $(e.target.parentElement).insertAfter($(e.target.parentElement).next());
                    })     
                    )
        })
})