function addUser(){
    let userName=document.getElementById("name").value
    let userPassword=document.getElementById("password").value

    if(userName && userPassword){
        let userData= JSON.parse(localStorage.getItem("users")) || [];
        userData.push({name:userName,password:userPassword})
        localStorage.setItem("users",JSON.stringify(userData))
    }
    
    

}
function login(){
    let loginName=document.getElementById("loginName").value;
    let loginPassword=document.getElementById("loginPassword").value;
    let data=JSON.parse(localStorage.getItem("users")) || []
    
    let matched=data.find(x=>x.name===loginName && x.password===loginPassword)
    if(matched){
        alert(`you are logged in as ${loginName} `)
        window.location.href=`${loginName}.html`
    }
    else{
        alert("wrong credentials, Try again!")
    }
};