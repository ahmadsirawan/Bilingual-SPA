var select_names = function () {

	
	const php = "php/select_names.php";


	const xhr = new XMLHttpRequest();

	
	let itemRaw = [];

    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            itemRaw = JSON.parse(xhr.responseText);
			console.log(itemRaw); 

			
			let container = document.getElementById('listContainer');
			
			container.innerHTML = "";
			
			
			for (let c in itemRaw) {
				
				console.log(c);
				
				let	form = document.getElementById('reviewForm');
				form.value = '';
				
				let personDIV = document.createElement('div');
				 personDIV.classList.add("box", "faded-out");
				
				
				let nameP = document.createElement('blockquote');
				let reviewP = document.createElement('q');
				nameP.innerHTML = '- ' + itemRaw[c].name;
				nameP.classList.add("nameP", "faded-out");



				reviewP.innerHTML = itemRaw[c].review;

				
				
				personDIV.appendChild(reviewP);
				personDIV.appendChild(nameP);
				container.appendChild(personDIV);
				requestAnimationFrame(() => {
				    // personDIV.classList.remove("faded-out")

				    document.querySelectorAll('.box').forEach(item => {
 					 item.classList.remove("faded-out");
})
				})

			}
        }
	};
	xhr.send();
};
select_names();
