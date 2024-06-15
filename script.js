const markAsRead = document.getElementById("mark");
const cleaner = document.querySelectorAll(".notification");
const notice = document.getElementById("notice");
const noteIcon = document.querySelectorAll(".activ_sapan");
const notificationNumber = document.querySelectorAll(".active");
notice.innerHTML=notificationNumber.length;
markAsRead.addEventListener('click',()=>{
    cleaner.forEach(function(cleaner){
        if(cleaner.classList.contains('active')){
            cleaner.classList.remove('active');
            const notificationNumber = document.querySelectorAll(".active");
            const unread = notificationNumber.length;
            notice.innerHTML=unread;
            const noteIcon = document.querySelectorAll(".activ_sapan");
            noteIcon.forEach(function(noteIcon){
                noteIcon.classList.add("hide")
            })
        }
        
    })
})