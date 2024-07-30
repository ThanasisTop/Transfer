function bookingOnLoad(){
	
	vm=this;
	vm.initialize=function(){
		vm.Locations={
			547:"Chania airport",
			  1:"Chania port",
			567:"Heraklion airport",
			552:"Heraklion port",
			571:"Agia Marina (Chania)",
			568:"Almirida (Chania)",
			570:"Chania city",
		    576:"Chora Sfakion (Chania)",
		    569:"Georgioupolis (Chania)",
		    573:"Kalives (Chania)",
		    574:"Kolymbari (Chania)",
		    577:"Paleochora (Chania)",
		    572:"Platanias (Chania)",
			566 :"Agia Pelagia (Heraklion)",
		    551 :"Heraklion city",
		    553 :"Hersonissos (Heraklion)",
		    555 :"Malia (Heraklion)",
		    554 :"Stalis (Heraklion)",
			562 :"Adele (Rethymnon)",  
			148 :"Adelianos Kampos (Rethymnon)",
			565 :"Bali (Rethymnon)",
			560 :"Panormo (Rethymnon)",
			319 :"Pigianos Kampos (Rethymnon)",
			564 :"Plakias (Rethymnon)",
			561 :"Platanias (Rethymnon)",
			550 :"Rethymnon city",
			563 :"Skaleta (Rethymnon)",
			2	:"Agios Nikolaos (Lasithi)",
			3	:"Elounda (Lasithi)",
            4	:"Elounda Plaka (Lasithi)"
		};      

		vm.form = document.getElementById('contactInformationForm')
		vm.pickUpLoc = vm.Locations[localStorage.getItem('pickUpLocValue')];
		vm.dropOffLoc = vm.Locations[localStorage.getItem('dropOffLocValue')];
		vm.pickUpDate = localStorage.getItem('pickUpDateValue');
		vm.returnDate = localStorage.getItem('returnDateValue');
		vm.pickUpTime = localStorage.getItem('pickUpTimeValue');
		vm.returnTime = localStorage.getItem('returnTimeValue');
		vm.adults = localStorage.getItem('adultsValue');
		vm.children = localStorage.getItem('childrenValue');
		vm.infants = localStorage.getItem('infantsValue');
		
		
		document.getElementById('pick-up-location-result').textContent=vm.pickUpLoc;
		document.getElementById('drop-off-location-result').textContent=vm.dropOffLoc;
		document.getElementById('pick-up-date-result').textContent=vm.pickUpDate;
		document.getElementById('return-date-result').textContent=vm.returnDate;
		document.getElementById('pick-up-time-result').textContent=vm.pickUpTime;
		document.getElementById('return-time-result').textContent=vm.returnTime;
		document.getElementById('adults-result').textContent=vm.adults;
		document.getElementById('children-result').textContent=vm.children;
		document.getElementById('infants-result').textContent=vm.infants;
		
		document.getElementById('airport').style.display="none";
		
		if(vm.pickUpLoc=="Heraklion airport"||vm.dropOffLoc=="Heraklion airport"||
		   vm.pickUpLoc=="Chania airport"||vm.dropOffLoc=="Chania airport"){
			document.getElementById('airport').style.display="block";
		}
		
		if(vm.children=="0"){
			document.getElementById('children').style.display="none";
		}
		
		if(vm.infants=="0"){
			document.getElementById('infants').style.display="none";
		}
		
		if(vm.returnTime==""){
			document.getElementById('return-time').style.display="none";
		}
		
		if(vm.returnDate==""){
			document.getElementById('return-date').style.display="none";
		}
		
		if(vm.adults=="9-20"){
			document.getElementById('vehicle').innerHTML ='<div><b>Vehicle:</b> Mercedes Sprinter Limo Vip <img src=\"images/limobus.png\" alt="" class=\"img-responsive\"></div>';
		}
			
	}
	vm.initialize();
	
	vm.submit=function(){
		vm.fullName = document.getElementById('fullName').value;
		vm.yourEmail= document.getElementById('email').value;
		vm.emailConfirmation = document.getElementById('emailConfirmation').value;
		vm.mobilePhone = document.getElementById('mobilePhone').value;
		vm.flightNumber = document.getElementById('flightnumber').value;
		vm.address = document.getElementById('address').value;
		vm.comments = document.getElementById('comments').value;
		
		
		if(!vm.pickUpLoc && !vm.dropOffLoc && !vm.pickUpDate && !vm.pickUpTime){
			vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
			document.getElementById('message').innerHTML = "You didnt select Location, Date and Time";
			document.getElementById('alertImage').innerHTML ="<img src=\"images/exclamation-mark.png\" alt=\"exclamation-mark\" width=\"80\" height=\"80\">";
			vm.alertModal.show();
			return;
		}
		
		if(!vm.fullName || !vm.yourEmail || !vm.emailConfirmation || !vm.mobilePhone){
			vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
			document.getElementById('message').innerHTML = "Please fill the Contact Information Form";
			document.getElementById('alertImage').innerHTML ="<img src=\"images/exclamation-mark.png\" alt=\"exclamation-mark\" width=\"80\" height=\"80\">";
			vm.alertModal.show();
			return;
		}
		
		if(vm.yourEmail != vm.emailConfirmation){
			vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
			document.getElementById('message').innerHTML = "Confirmation email is different with email";
			document.getElementById('alertImage').innerHTML ="<img src=\"images/exclamation-mark.png\" alt=\"exclamation-mark\" width=\"80\" height=\"80\">";
			vm.alertModal.show();
			return document.getElementById('emailConfirmation').value="";
		}
		
		if(document.getElementById('airport').style.display!="none" && (!vm.address || !vm.flightNumber)){
			vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
			document.getElementById('message').innerHTML = "Please complite Flight Number and Hotel Name or Address";
			document.getElementById('alertImage').innerHTML ="<img src=\"images/exclamation-mark.png\" alt=\"exclamation-mark\" width=\"80\" height=\"80\">";
			vm.alertModal.show();
			return;
		}
		
		
			vm.message = "<b>----Booking Information----</b><br>"+
						"<b>Pick-Up Location:</b> "+vm.pickUpLoc+"<br>"+ 
						"<b>Drop-Off Location:</b>  "+vm.dropOffLoc+"<br> "+
						"<b>Pick Up Date:</b> "+vm.pickUpDate+"<br> "+
						"<b>Return Date:</b> "+vm.returnDate+"<br>"+
						"<b>Pick Up Time:</b> "+vm.pickUpTime+"<br>"+
						"<b>Return Time:</b> "+vm.returnTime+"<br>"+
						"<b>Adults:</b> "+vm.adults+"<br>"+
						"<b>Children:</b> "+vm.children+"<br>"+
						"<b>Infants:</b> "+vm.infants+"<br>"+
						"<b>----Contact Information----</b><br>"+
						"<b>Full Name:</b> "+vm.fullName+"<br>"+ 
						"<b>Email:</b>  "+vm.yourEmail+"<br>"+
						"<b>Mobile Phone:</b> "+vm.mobilePhone+"<br>"+
						"<b>Flight Number:</b> "+vm.flightNumber+"<br>"+
						"<b>Hotel Address:</b> "+vm.address+"<br>"+
						"<b>Comments:</b> "+vm.comments;
						
			vm.mail={ 
					SecureToken : "1f09fd72-c49e-4d18-8114-f768562c3313",
					To : "info@obsidiantransfers.gr",
					From : "info@obsidiantransfers.gr",
					Subject : "Booking",
					Body : "" 
					};		
	
			vm.mail['Body']=vm.message;			
			vm.sendEmail(vm.mail);
		
		
	};
	
	vm.redirect=function() {
		window.location.href="index.html";
	}
	
	vm.sendEmail=function(mail){
		
		Email.send(mail).then(
			function(message){
				if(message=="OK"){
					
					vm.successModal = new bootstrap.Modal(document.getElementById('successModal'), {});
					document.getElementById('successMessage').innerHTML = "Email sended successfully. Your booking submitted! We will contact you as soon as possible to confirm your reservation.";
					document.getElementById('successImage').innerHTML = "<img src=\"images/checked.png\" width=\"80px\" height=\"80px\">";
					vm.successModal.show();
					localStorage.clear();
				}
				if(message!="OK"){
					vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
					document.getElementById('message').innerHTML = "Email failed. Your booking was not submitted.";
					document.getElementById('alertImage').innerHTML ="<img src=\"images/cancel.png\" alt=\"cancel\" width=\"80\" height=\"80\">";
					vm.alertModal.show();
				}
			}
		);
	};

}