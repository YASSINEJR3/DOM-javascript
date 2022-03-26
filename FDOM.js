const inputs_container=document.getElementById('DOM-container');
const container = document.querySelector('.name-container');
const add_btn = document.getElementById('add-btn');
const check_btn = document.getElementById('check-btn');
const nom_span=document.getElementById('nom-span');
const regix =/^[A-Z][a-zA-Z]{2,15}$/;
const nom_msg_valid = " est valide";
const nom_msg_err = " n'est pas valide";
add_btn.onclick =()=>{

    ///Prenom balises
    const prelab =document.createElement('label');
    const prediv =document.createElement('div');
    const preinput =document.createElement('input'); 
    const prespan=document.createElement('span'); 
    //prenom label
    prelab.setAttribute('for',"prenom");
    prelab.innerText="Prénom:";
    inputs_container.appendChild(prelab);
    ///prenom input
    
    preinput.setAttribute('type',"text");
    preinput.setAttribute('id',"prenom");
    preinput.setAttribute('placeholder',"Prénom");
    preinput.className="form-control";
    prediv.appendChild(preinput);
    /// prenom div  
    prediv.className="input-group mb-3";
    inputs_container.appendChild(prediv);
    //Prenom span
    prespan.setAttribute('id',"pre-span");
    prespan.style.display="block";
    inputs_container.appendChild(prespan);
    
    ///Date balises
    const datelab =document.createElement('label');
    const datediv =document.createElement('div');
    const dateinput =document.createElement('input'); 
    //Date label
    datelab.setAttribute('for',"date");
    datelab.innerText="Date:";
    inputs_container.appendChild(datelab);
    ///Date input
    
    dateinput.setAttribute('type',"date");
    dateinput.setAttribute('id',"date");
    dateinput.className="form-control";
    datediv.appendChild(dateinput);
    /// Date div  
    datediv.className="input-group mb-3";
    inputs_container.appendChild(datediv);
    //Show check button
    check_btn.style.visibility = "visible";
    ///Remove add button
    add_btn.remove();    


    ///Checking Prenom et Nom
    check_btn.onclick = ()=>{
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const pre_span = document.getElementById('pre-span');
        ///Check Nom
        validateName(nom.value,nom_msg_err,nom_msg_valid,nom_span);
        ///Check Prenom
        validateName(prenom.value,nom_msg_err,nom_msg_valid,pre_span);
    }
    

}



function validateName(Str,Err,valid,span){
            
                
    if(Str.trim()==="")
    {
        span.innerText ="Ce champ ne peut pas etre vide";
        span.style.color="red";
    }else{
        if(!regix.test(Str))
        {
            span.innerText =Str+Err;
            span.style.color="red";
        }else{
            span.innerText =Str+valid;
            span.style.color="green";
        }
    }
}