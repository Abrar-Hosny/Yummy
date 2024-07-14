class Validation {



testInputs (){
    let regex = {
        name :  /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/ , 
        email : /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim, 
        age :/^(1[89]|[2-9]\d)$/gm  , 
        phone : /^(1[89]|[2-9]\d)$/gm , 
        password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    }






}




}