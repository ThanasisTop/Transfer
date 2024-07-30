function contactOnLoad(){
	vm=this;
	vm.submitContactEmail=function(){
		vm.contactName = document.getElementById("contactFullName").value;
		vm.contactEmail = document.getElementById("contactEmail").value;
		vm.contactSubject = document.getElementById("contactSubject").value;
		vm.contactMessage = document.getElementById("contactMessage").value;
		
		
		
		vm.mail={ 
					SecureToken : "1f09fd72-c49e-4d18-8114-f768562c3313",
					To : "info@obsidiantransfers.gr",
					From : "info@obsidiantransfers.gr",
					Subject : "",
					Body : "" 
					};		
				
		 vm.mail['Subject']=vm.contactSubject;
		 vm.mail['Body']="<b>Name: </b>"+vm.contactName+"<br>"+
						 "<b>Email: </b>"+vm.contactEmail+"<br>"+
						 vm.contactMessage;		
			
		vm.sendContactEmail(vm.mail);
	};
	
	vm.redirect=function() {
		window.location.href="index.html";
	}
	
	vm.sendContactEmail=function(mail){
		
		Email.send(mail).then(
			function(message){
				if(message=="OK"){
					vm.successModal = new bootstrap.Modal(document.getElementById('successModal'), {});
					document.getElementById('successMessage').innerHTML = "Email sended successfully! We will contact you as soon as possible.";
					document.getElementById('successImage').innerHTML = "<img src=\"images/checked.png\" width=\"80px\" height=\"80px\">";
					vm.successModal.show();
				}
				if(message!="OK"){
					vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
					document.getElementById('message').innerHTML = "Email failed!";
					document.getElementById('alertImage').innerHTML ="<img src=\"images/cancel.png\" alt=\"cancel\" width=\"80\" height=\"80\">";
					vm.alertModal.show();
				}
			}
		);
	};
}