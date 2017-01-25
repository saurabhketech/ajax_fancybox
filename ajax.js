
   var current=1;
            function change_slide(page)
              {
                current=page;
                user(page);
              }
           $(document).ready(function()
              {        
                user(1);
             }); 
            function user(page){
            var data1 = ""
            var total_rows=""
          
            $.ajax({ 
                type: "POST",
                data:{ "page": page},
                url: "connect.php",             
                dataType: "html",
                success: function(rows) {  
                rows = JSON.parse(rows)
                total_rows=rows.data;
                table(total_rows);
                total_buttons=rows.count/5;
                if(!(total_buttons%5==0)){
                total_buttons=total_buttons+1;
              }
                button(total_buttons);
                   },

            complete: function()   {
            setTimeout(function()  {
            user(current);
                },4000);
                  }
               }) 
             }

            function table(total_rows) {
            var data1 = ""                
             data1+= "<table  class='table'>"; 
               data1+=  "<tr>" +
                        "<th>ID</th>" +
                        "<th>Name</th>" +
                        "<th>email</th>" +
                        "<th>message</th>" +
                        "<th>date</th>" +
                        "</tr>"
            for (var i in total_rows)  {

              var row = total_rows[i];
            
              data1+=   "<tr>" +
                        "<td>" + row[0] + "</td>" +
                        "<td>" + row[1] + "</td>" +
                        "<td>" + row[2] + "</td>" +
                        "<td>" + row[3] + "</td>" +
                        "<td>" + row[4] + "</td>" +
                        "</tr>";                  
                  }
        
              data1+= "</table>";
                $(".container").html(data1); 
                 }
   
            function button(total_pages){
            
            var buttons = "<ul class='pagination' align='center' >"
            for (var i = 1; i<=total_pages; i ++)  {
              buttons +=  "<li><a id= "+i+" onclick= 'change_slide(" +i+ ")' href= '#'>"+i+"</a></li>"
                     }
              buttons += "</ul>";
              $(".pagination").html(buttons);
                  }
     