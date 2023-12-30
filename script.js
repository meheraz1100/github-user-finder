let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText != ''){
        //fetch api
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if(data == 'Not Found'){
                    //Show alert
                    ui.showProfile("User not Found", alert);
                    
                }else{
                    //show profile
                    ui.showProfile(data);
                }
            })
    }else{
        ui.clearProfile();
    }
})