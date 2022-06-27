function checker(){
    var result = confirm('Do you want to log out?');
    if (result == false){
        event.preventDefault();
    }
}