
var insert_name = function() {
    
    const addForm = document.getElementById("reviewForm");

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const php = "php/insert_name.php";


        const xhr = new XMLHttpRequest();
        let formData = new FormData(addForm);

        
        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
            
                console.log(xhr.responseText);

                let input_name = document.getElementById('name');
            input_name.value = "";
            let input_text = document.getElementById("review")
            input_text.value = "";



            let p = document.createElement('p');
            p.innerHTML = " Thank You, your testimonial has been submited.";
            p.classList.add("msg", "faded-out");
            
            reviewForm.appendChild(p);
            requestAnimationFrame(() => {
             p.classList.remove("faded-out")
})
          
             


             setTimeout(function () {
                p.remove();
           }, 5000)

                select_names();
            }

        };
        xhr.send(formData);
    });
};
insert_name();