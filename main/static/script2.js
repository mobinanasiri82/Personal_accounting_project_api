const serverUrl="http://127.0.0.1:8000/api/transactions/"
fetch (serverUrl)
.then(function (response){
    return response.json();
})
.then (function (data){
    if(data.length>0){
        let content="";
        let Total_sum =0;
        let Expenses =0;
        const Total_box = document.querySelector(".Total");
        const InCome = document.querySelector(".Income");
        const Total_task = document.querySelector(".Expense");
        const T_box = document.querySelector(".tbody-content");
        // let statusIcon="";



    
    data.forEach(function(item){
        console.log(data);

        if(item.transaction_type==="1"){
            Total_sum += item.price;
            
        }
        else if (item.transaction_type==="2"){
            Expenses += item.price;
        }
        
        //   # braye icon ke kodom varizi bardshti hast
        // if(item.transaction_type==="1"){
        //     statusIcon=`< <i class="bx bxs-up-arrow-circle"></i>`
        // }
        // else{
        //     statusIcon=` <i class="bx bxs-down-arrow-circle"></i>`
        // }

    });
    data.reverse().forEach(function(item){
        
        content+=`</tr>
        <tr>
        <th scope="row">${item.id}</th>
        <td>
        ${item.price}
        ${item.transaction_type==='1' ? `<i class="bx bxs-up-arrow-circle"></i>` : `<i class="bx bxs-down-arrow-circle"></i>`}
        
        </td>
            <td>${item.category.name}</td>
            <td>${item.account.bank_name}</td>
            <td>${item.time}</td>
        </tr>`
    });


    T_box.insertAdjacentHTML("beforeend",content);
    Total_task.textContent=Expenses.toLocaleString();
    InCome.textContent=Total_sum.toLocaleString();
    Total_box.textContent=(Total_sum - Expenses).toLocaleString();
    }
    else{
        const table=document.querySelector(".table");
        const empyt=document.querySelector(".empty");

        table.classList.add("d-none")
        empyt.classList.remove("d-none")
    }
});
