let currentRow=null;
let arr=[];
let valid=true;
let validate =(object)=>
{
    if(object.id==="name")
    {
        for(let i=0;i<object.value.length;i++)
        {
            if(object.value[i]>='a' && object.value[i]<='z' || object.value[i]>='A' && object.value<='Z')
            {
                object.style.border = "solid green 3px"
                document.getElementById("namealert").innerHTML="";

            }
            else 
            {
                valid=false;
                object.style.border = "solid red 3px"
                document.getElementById("namealert").innerHTML="* Please enter a valid name";
            }
        }
    
    }
    else if(object.id==="phonenumber")
    {
        for(let i=0;i<object.value.length;i++)
        {
            
        if(object.value.charAt(i)>='0' && object.value.charAt(i)<='9')
        {
            if( object.value.length==10)
            {

                valid=true;
                object.style.border = "solid green 3px"
                document.getElementById("phonealert").innerHTML="";
            }
            else
            {
                valid=false;
                object.style.border = "solid red 3px"
                document.getElementById("phonealert").innerHTML="* Please enter a valid phonenumber";
            }
           
        }
        else
        {
            valid=false;
            object.style.border = "solid red 3px"
            document.getElementById("phonealert").innerHTML="* Please enter a valid phonenumber";
        }
    }
        
    }
    else if(object.id==="city")
    {
        for(let i=0;i<object.value.length;i++)
        {
            if(object.value[i]>='a' && object.value[i]<='z' || object.value[i]>='A' && object.value<='Z')
            {
            object.style.border = "solid green 3px"
            document.getElementById("cityalert").innerHTML="";
            }
            else
            {
                valid=false;
                object.style.border = "solid red 3px"
                document.getElementById("cityalert").innerHTML="* Please enter a valid city";
            }
      
    }
}
    
}

let submitForm = () =>
{
    let name=document.getElementById("name").value;
    let phonenumber=document.getElementById("phonenumber").value;
    let date=document.getElementById("date").value;
    let city=document.getElementById("city").value;
    let address=document.getElementById("city").value;
    if(valid && name!="" && phonenumber!="" && date!="" && city!="" && address!="")
    {
        alert("Successfully Submited")
        let arr=readFormData();
        insertFormData(arr);
        reset();
    }
    else{
        document.getElementById("view").innerHTML="* Please Check the All the Fields";
    }
}
let readFormData =()=>
{
    
    arr.push({'name':document.getElementById("name").value,'phonenumber':document.getElementById("phonenumber").value,'date':document.getElementById("date").value,'city':document.getElementById("city").value,'address':document.getElementById("address").value,});
    return arr;
}
let insertFormData = (arr) =>
{
    let a="";
    for(let i=0;i<arr.length;i++)
    {
       
        a+="<tr><td>"+arr[i].name+"</td><td>"+arr[i].phonenumber+"</td><td>"+arr[i].date+"</td><td>"+arr[i].city+"</td><td>"+arr[i].address+"</td></tr>";
         document.getElementById("tbody").innerHTML=a
    }
   

}

let reset = () =>
{
    document.getElementById("view").innerHTML="";
    document.getElementById('name').value="";
    document.getElementById('phonenumber').value="";
    document.getElementById('date').value="";
    document.getElementById('city').value="";
    document.getElementById('address').value="";
    document.getElementById("view").innerHTML="";
    currentRow=null;
}
