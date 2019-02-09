

$(()=>{

    let tasks=[]
    //refresh();
    if(localStorage.list){
        tasks=JSON.parse(localStorage.list)
        console.log(tasks)
    }

    function refresh()
    {
       localStorage.list=JSON.stringify(tasks)
       let list=document.getElementById("tasklist")
       list.innerHTML="";
       //console.log($('#tasklist').innerHTML)

       for(let i in tasks)
       {
           let task=tasks[i];
            //console.log(task.priority)
           $('#tasklist').append(
               $('<div>')
                .attr('class',"row")
               .append(
               $('<li>')
                   .attr('class',task.done?"list-group-item col-12 on":"list-group-item col-12 off")
                   .append(
                       $('<span>')
                       .text(task.text)
                   ) 
                   .append(
                    $('<button>')
                      .attr('class'," don btn btn-outline-secondary px-3 mx-2 butts ")
                      .text(task.done ? '✔':'❌')
                 
                      .click(()=>{
                         task.done=!task.done;
                         refresh()
                        })
                    )
                    .append(
                        $('<button>')
                           
                           .click(()=>{
                             let task1=tasks.splice(i,1)
                            console.log(task1);
                            if(i<tasks.length-1)
                             tasks.splice(i+1,0,task1)
                            else
                             tasks.splice(i,0,task1) 
                             refresh();
                        })
                        .attr('class',"btn btn-outline-secondary px-3 mx-2 butts")
                           .text('⬇')
                    )
                    .append(
                        $('<button>')
                           
                           .click(()=>{
                            let task1=tasks.splice(i,1)
                            console.log(task1);
                            if(i>0)
                              tasks.splice(i-1,0,task1)
                            else  
                              tasks.splice(0,0,task1)
                             refresh();
                           
                        })
                        .attr('class',"btn btn-outline-secondary px-3 mx-2 butts")
                        .text('⬆')
                    )  
                    .append(
                        $(`<button>🗑</button>`)
                        .attr('class',"btn btn-outline-secondary px-3 mx-2 butts")
                        .click(()=>{
                              tasks.splice(i,1);
                              refresh();          
                        })
                    )
                    //.append(
                        //$('<input type="text"  class=" form-control" placeholder="Priority?">')
                        //.attr('id',"prior")
                        /*.keyup(function(e){
                            if(e.keyCode==13)
                            {
                             tasks[i].priority=$('#prior').val()
                             //console.log($('#prior').val())
                             tasks.sort(function(a,b){
                                  return a.priority<b.priority;
                             })
                             refresh();
                          }
                        })*/
                    //)
               )
           )
           
           
        
       }
    }
     
    
   
    $('.out')
    .append(
        $('<div class="row"></div>')
     .append('<input type="text" id="task" class="col" placeholder="New Task Here...">')
     .append('<button id="add" class="form-control col-2  col-sm-2  btn btn-dark px-2 mx-1">Add</button>')
     .append(
        ('<button id="clear" class="form-control col-2 btn  col-sm-2 btn-dark px-2 mx-1">Clear</button>')
     )
     .append('<button id="sort" class="form-control col-2 col-sm-2 btn btn-dark px-2 mx-1" >Sort</button>')
     .append(
         $('<div>')
           .append('<ul id="tasklist" class="list-group col-10"></ul>')
           .attr('class',"container")
    )

    )   

    refresh();
    $('#task').keyup(function(ev){
        if(ev.keyCode==13)
         {
            let val=$('#task').val();
            if(val=="")
               window.alert("invalid");
            else   
            //console.log($('#task').val())
            {
            tasks.push({
                done:false,
                text:val,
                priority:500
            })
            refresh();}
         }
    })
    $('#add').click(()=>{
        let val=$('#task').val();
        if(val=="")
           window.alert("invalid");
        else   
        //console.log($('#task').val())
        {
        tasks.push({
            done:false,
            text:val,
            priority:200
        })
        refresh();}
    })
    
    $('#sort').click(()=>{
        tasks.sort(function(a,b){
            return a.done-b.done;
        })
        refresh();
    })

    $('#clear').click(()=>{
        console.log(tasks.length);
        let i=tasks.length;
        for(let j=0;j<i;j++)
        {
            if(tasks[j].done)
            {
              tasks.splice(j,1);
              //refresh();
              i--;
            }  
        }
      
       refresh()
    })

   
     
     
   
   
})


