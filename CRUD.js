let currentRow=null;
let arr=[];
let valid=true;
let namevalidate =(object)=>
{
        for(let i=0;i<object.value.length;i++)
        {
            if(object.value.charAt(i)>='a' && object.value.charAt(i)<='z' || object.value.charAt(i)>='A' && object.value.charAt(i)<='Z')
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
let phonevalidate =(object)=>
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
let emailvalidate =(object)=>
{
        
         let k=0;
        for(let i=0;i<object.value.length;i++)
        {
            if(object.value.charAt(i)=='.' || object.value.charAt(i)=='@')
            {
                if(object.value.charAt(i)=='@' && k==0)
                {
                    k=1;
                    valid=true;
                    object.style.border = "solid green 3px"
                    document.getElementById("emailalert").innerHTML="";
                }
            }
        }
        if(k!=1)
        {
           
                valid=false;
                object.style.border = "solid red 3px"
                document.getElementById("emailalert").innerHTML="* Please enter a valid email";

        }

}
let datevalidate =(object)=>
{
    let date=new Date(document.getElementById("date").value);
    let currentDate=new Date();
    if(date<currentDate)
    {
            valid=true;
            object.style.border = "solid green 3px"
            document.getElementById("datealert").innerHTML="";

    }
    else
    {
                valid=false;
                object.style.border = "solid red 3px"
                document.getElementById("datealert").innerHTML="* Please enter a valid date";

    }
}
    

let submitForm = () =>
{
    let name=document.getElementById("name").value;
    let phonenumber=document.getElementById("phonenumber").value;
    let date=document.getElementById("date").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    if(valid && name!="" && phonenumber!="" && date!="" && email!="" && address!="")
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
    
    arr.push({'name':document.getElementById("name").value,'phonenumber':document.getElementById("phonenumber").value,'date':document.getElementById("date").value,'email':document.getElementById("email").value,'address':document.getElementById("address").value,});
    return arr;
}
let insertFormData = (arr) =>
{
    let a="";
    for(const element of arr)
    {
       
        a+="<tr><td>"+element.name+"</td><td>"+element.phonenumber+"</td><td>"+element.date+"</td><td>"+element.email+"</td><td>"+element.address+"</td></tr>";
         document.getElementById("tbody").innerHTML=a
    }
   

}

let reset = () =>
{
    document.getElementById("view").innerHTML="";
    document.getElementById('name').value="";
    document.getElementById('phonenumber').value="";
    document.getElementById('date').value="";
    document.getElementById('email').value="";
    document.getElementById('address').value="";
    document.getElementById("view").innerHTML="";
    currentRow=null;
}