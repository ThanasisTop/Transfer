
function indexOnLoad(){
	
	vm=this;
	vm.initialize=function(){
		document.getElementById('timereturn').style.display="none";
		document.getElementById('datereturn').style.display="none";
		vm.currentDate = new Date();
		
	}
	vm.initialize();
	console.log(getCookie("pick-up-location"))
	
	vm.enableField=function(){
		if(document.getElementById("timereturn").style.display=="none"){
			document.getElementById('timereturn').style.display="block";
			document.getElementById('datereturn').style.display="block";
			return;
		}
		document.getElementById('timereturn').style.display="none";
		document.getElementById('datereturn').style.display="none";
		document.getElementById('time_return').value="";
		document.getElementById('return_date').value="";
	}
	
	vm.createBooking=function(){
		
	  vm.pickUpLocValue = document.getElementById('pick-up-location').value;
	  vm.dropOffLocValue = document.getElementById('drop-off-location').value;
	  vm.pickUpDateValue = document.getElementById('book_pick_date').value;
	  vm.returnDateValue = document.getElementById('return_date').value;
	  vm.pickUpTimeValue = document.getElementById('time_pick').value;
	  vm.returnTimeValue = document.getElementById('time_return').value;
	  vm.adultsValue = document.getElementById('adults').value;
	  vm.childrenValue = document.getElementById('children').value;
	  vm.infantsValue = document.getElementById('infants').value;
	  vm.alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {});
	  
	 
	  vm.date = vm.pickUpDateValue.split('-')[1]+'-'+vm.pickUpDateValue.split('-')[0]+'-'+vm.pickUpDateValue.split('-')[2];
	  vm.pickUpDate = new Date(vm.date);
	  vm.pickUpDate.setHours(vm.pickUpTimeValue.split(':')[0]);
	  vm.pickUpDate.setMinutes(vm.pickUpTimeValue.split(':')[1]);
	  
	  
	  //setCookie("pick-up-location", vm.pickUpLocValue, 7, "/", "www.obsidiantransfers.gr");
	  
	  localStorage.setItem('pickUpLocValue', vm.pickUpLocValue);
	  localStorage.setItem('dropOffLocValue',vm.dropOffLocValue);
	  localStorage.setItem('pickUpDateValue',vm.pickUpDateValue);
	  localStorage.setItem('returnDateValue',vm.returnDateValue);
	  localStorage.setItem('pickUpTimeValue',vm.pickUpTimeValue);
	  localStorage.setItem('returnTimeValue',vm.returnTimeValue);
	  localStorage.setItem('adultsValue', vm.adultsValue);
	  localStorage.setItem('childrenValue', vm.childrenValue);
	  localStorage.setItem('infantsValue', vm.infantsValue);
	  
	  
	  
	  if(vm.pickUpDateValue=="" || vm.pickUpLocValue=="" || vm.pickUpTimeValue ==""|| vm.dropOffLocValue==""){
		document.getElementById('message').innerHTML = "Please complete the form!";
		vm.alertModal.show();
		return;
	  }
	  
	  if(vm.pickUpLocValue==vm.dropOffLocValue){
		 document.getElementById('message').innerHTML = "Pick-Up location is the same with Drop-Off location!";
		 vm.alertModal.show();
	     return document.getElementById('drop-off-location').value=""; 
	  }
	  
	  if(vm.pickUpDate<vm.currentDate){
		  document.getElementById('message').innerHTML = "Your pick up date is invalid!";
		  vm.alertModal.show();
		  return;
	  }
	  
	  if(vm.pickUpDate==vm.currentDate){
		  document.getElementById('message').innerHTML = "Your booking must be at least 24 hours before pick up date!";
		  vm.alertModal.show();
		  return;
	  }
	  
	  if(vm.pickUpDate>vm.currentDate){
		  
		  var diff =(vm.pickUpDate.getTime() - vm.currentDate.getTime()) / 1000;
			diff /= (60 * 60);
			var roundDiff =  Math.abs(Math.round(diff));
			if(roundDiff<24){
				document.getElementById('message').innerHTML = "Your booking must be at least 24 hours before pick up date!";
				vm.alertModal.show();
				return document.getElementById('time_pick').value="";
			}
		    
	  }
	 
	  window.location.href="book.html";
	}
	
	vm.pickDateSaveChanges=function(){
		document.getElementById("book_pick_date").value=document.getElementById("book_pick_date_modal").value;
		$("#PickUpDateModal").modal("hide");
	}
	
	vm.returnDateSaveChanges=function(){
		document.getElementById("return_date").value=document.getElementById("return_date_modal").value;
		$("#ReturnDateModal").modal("hide");
	}
	
	
}


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
		    /*1485:"Aisha Petite Suites (Chania city)",
            1486:"Almirida Beach (Almirida, Chania)",
            3128:"Almirida Residence Boutique (Almirida, Chania)",
            1487:"Ambassadors Residence (Chania city)",
            2395:"Ammos (Agioi Apostoloi, Chania)",
            591 :"nemos Luxury Grand Resort (Georgioupolis)",
            1488:"Atlantica Caldera Bay",
            2373:"Atlantica Caldera Bay (Platanias, Chania)",
            1489:"Avra Imperial (Kolymbari, Chania)",
            1490:"Casa Di Delfino (Chania city)",
            1491:"Cavo Spada (Kolymbari, Chania)",
            3141:"Corissia Princess (Georgioupolis, Chania)",
            3146:"Delfina Beach (Georgioupolis, Chania)",
            2394:"Domes Noruz (Agioi Apostoloi, Chania)",
            3148:"Domes Zeen (Chania)",
            1492:"Domus Renier (Chania city)",
            3150:"Eliros Mare (Georgioupolis, Chania)",
            3160:"Epos Luxury Beach (Georgioupolis, Chania)",
            1493:"Esthisis Suites (Platanias, Chania)",
            3161:"Euphoria Resort (Kolymbari, Chania)",
            1494:"Fatma Boutique (Chania city)",
            1495:"Galini Sea View (Agia Marina, Chania)",
            3164:"Georgioupolis Resort &amp; Aqua Park (Georgioupolis, Chania)</option",
            1496:"Grant Bay Resort (Kolymbari, Chania)",
            3166:"Hydramis Palace (Georgioupolis, Chania)",
            1497:"Iolida Beach (Agia Marina, Chania)",
            1498:"Kalives Beach (Kalives, Chania)",
            1499:"Kiani Akti (Kalives, Chania)",
            1500:"Kydon (Chania city)",
			3173:"La Mer Resort (Georgioupolis, Chania)",
		    1501:"Minoa Palace (Platanias, Chania)",
		    3188:"Mythos Palace Resort (Georgioupolis, Chania)",
		    3195:"Pepper Sea Club (Georgioupolis, Chania)",
		    593	:"ilot (Georgioupolis)",
		    1502:"Porto Platanias (Platanias, Chania)",
		    1503:"Porto Platanias Village (Platanias, Chania)",
		    1504:"Porto Veneziano (Chania city)",
		    1505:"Samaria (Chania city)",
		    2369:"Scala De Faro (Chania city)",
		    1507:"Serenissima (Chania city)",
		    1508:"Sunprime Platanias Beach",
		    2374:"Sunprime Platanias Beach (Platanias, Chania)",
		    1509:"Sunrise Suites (Kalives, Chania)",
		    1510:"Thalassa Beach (Agia Marina, Chania)",
		    3219:"Vantaris Palace (Georgioupolis, Chania)",
		    1511:"Villa Thea (Almirida, Chania)",
		    2406:"Villa Thea (Almirida,Chania)",*/
			566 :"Agia Pelagia (Heraklion)",
		    551 :"Heraklion city",
		    553 :"Hersonissos (Heraklion)",
		    555 :"Malia (Heraklion)",
		    554 :"Stalis (Heraklion)",
			/*2408:"Abaton (Hersonissos)",
			2414:"Aldemar Cretan Village (Hersonissos, Heraklion)",
			2412:"Aldemar Knossos Royal (Hersonissos, Heraklion)",
			3127:"Aldemar Knossos Villas (Hersonissos, Heraklion)",
			2413:"Aldemar Royal Mare (Hersonissos, Heraklion)",
			2419:"Alexander Beach &amp;Village (Malia)",
			3130:"Annabelle Beach (Hersonissos, Heraklion)",
			2399:"Aquila Atlantis (Heraklion)",
			3135:"Bella Beach (Hersonissos, Heraklion)",
			2420:"Blue Sea (Stalis Heraklion)",
			2398:"Capsis Astoria (Heraklion)",
			2405:"Castello (Heraklion)",
			3143:"Creta Maris Beach (Hersonissos, Heraklion)",
			2418:"Cretan Malia Park (Malia)",
			3144:"Crete Golf Club (Hersonissos, Heraklion)",
			3151:"Ellysium Boutique (Hersonissos, Heraklion)",
			2397:"Galaxy (Heraklion)",
			2400:"GDM Megaron (Heraklion)",
			582 :"recotel Amirandes (Heraklion)",
			2421:"I Resort (Stalis Heraklion)",
			2401:"Ibis Styles (Heraklion)",
			2417:"Ikaros Beach (Malia)",
			2404:"Infinity Boutique (Heraklion)",
			2416:"Kernos Beach (Malia)",
			2403:"Lato Boutique (Heraklion)",
			3177:"Lyttos Beach (Hersonissos, Heraklion)",
			3178:"Lyttos Mare (Hersonissos, Heraklion)",
			2415:"Mitsis Laguna Resort &amp;Spa (Anissaras)",
			2410:"Nana beach (Hersonissos, Heraklion)",
			2411:"Nana Princess (Hersonissos)",
			2402:"Olive Green (Heraklion)",
			3210:"Star Beach (Hersonissos, Heraklion)",
			3211:"Stella Island Resort (Hersonissos, Heraklion)",
			3212:"Stella Palace Resort (Hersonissos, Heraklion)",*/
			562 :"Adele (Rethymnon)",  
			148 :"Adelianos Kampos (Rethymnon)",
			565 :"Bali (Rethymnon)",
			560 :"Panormo (Rethymnon)",
			319 :"Pigianos Kampos (Rethymnon)",
			564 :"Plakias (Rethymnon)",
			561 :"Platanias (Rethymnon)",
			550 :"Rethymnon city",
			563 :"Skaleta (Rethymnon)",
			/*2387:"Achillion Palace (Rethymnon)", 
			590 :"Aegean Sentido Pearl (Rethymnon)",
			3126:"Ammos Suites (Rethymnon city)", 
			3131:"Antica Dimora Suites (Rethymnon city)", 
			579 :"Aquila Porto Rethymno (Rethymnon)",
			578 :"Aquila Rithymna Beach (Rethymnon)",
			3132:"Atermono Boutique (Platanias, Rethymnon)", 
			3133:"Atlantis Beach (Rethymnon city)", 
			3134:"Atrium Ambiance (Rethymnon city)", 
			2377:"Avli Suites (Rethymnon)", 
			2392:"Batis (Rethymnon)", 
			3136:"Bellagio Luxury Butique (Rethymnon city)", 
			3137:"Brascos (Rethymnon city)", 
			2388:"Byzantine (Rethymnon)", 
			3138:"Casa Moazzo (Rethymnon city)", 
			2379:"Casa Vitae (Rethymnon)", 
			3140:"CHC Imperial (Pigianos Kampos, Rethymnon)", 
            2386:"Civitas Boutique (Rethymnon)",
            2391:"Cosmos (Rethymnon)",
            3142:"Cressa Suites (Rethymnon city)",
            3149:"Dyo Suites (Rethymnon city)",
            3162:"Fonte d'Oro Luxury Rooms (Rethymnon city)",
            3163:"Forest Park (Rethymnon city)",
            2389:"Fortezza (Rethymnon)",
            3165:"Golden Coast Seaside Apts (Rethymnon city)",
            2376:"Grecotel Caramel (Rethymnon)",
            2375:"Grecotel Creta Palace (Rethymnon)",
            2378:"Grecotel Leoniki Residence (Rethymnon)",
            580 :"Grecotel Marine Palace (Panormo)",
            2409:"Grecotel Plaza (Rethymnon)",
            592 :"Grecotel Plaza Spa (Rethymnon)",
            581 :"Grecotel White Palace (Rethymnon)",
            2362:"Iberostar Creta Marine (Panormo)",
            2361:"Iberostar Creta Panorama (Panormo)",
            3167:"Ibiscos Garden (Rethymnon city)",
            3168:"Ikarus Apts (Rethymnon city)",
            3169:"Ikones Seafront Luxury Suites (Rethymnon city)",
            2384:"Ionia Suites (Rethymnon)",
            2390:"Kapsaliana (Rethymnon)",
            3170:"Kleoniki Mare (Rethymnon city)",
            3171:"Kriti Beach (Rethymnon city)",
            3172:"Kyma Suites Beach (Rethymnon city)",
            3174:"La Stella (Platanias, Rethymnon)",
            3175:"Leo (Rethymnon city)",
            3176:"Liberty (Rethymnon city)",
            2382:"Macaris Suites &amp;Spa (Rethymnon)",
            3179:"Marinos Beach (Platanias, Rethymnon)",
            3180:"Mary Apts &amp;Mary Royal (Platanias, Rethymnon)",
            3234:"Mediterraneo Suite Home (Rethymnon city)",
            2381:"Melrose (Rethymnon)",
            3181:"Meltemi Coast Suites (Rethymnon city)",
            3182:"Menta City Boutique (Rethymnon city)",
            3183:"Minos Ambassador (Rethymnon city)",
            3185:"Minos Mare Royal (Platanias, Rethymnon)",
            3186:"Muses Suites (Rethymnon city)",
            3189:"Mythos Suites (Rethymnon city)",
            3190:"Neratze Hammam Suites (Rethymnon city)",
            3191:"North Coast Seaside Suites (Rethymnon city)",
            2393:"Olympic Palladium (Rethymnon)",
            3192:"Onar Superior Suites (Rethymnon city)",
            3194:"Palazzino Di Corina (Rethymnon city)",
            2385:"Palazzo Vecchio (Rethymnon)",
            3196:"Petalo Suites (Rethymnon city)",
            3200:"Porto Enetiko Suites (Rethymnon city)",
            3201:"Rethymno Hils Boutique (Rethymnon city)",
            3203:"Rethymno Residence (Adelianos Kampos, Rethymnon)",
            3204:"Rimondi Boutique (Rethymnon city)",
            589 :"Royal Blue (Panormo)",
            3206:"Royal Senses (Panormo, Rethymnon)",
            3207:"Secret Oasis (Rethymnon city)",
            3208:"Smaragdi Boutique (Rethymnon city)",
            3209:"Sohora Boutique (Rethymnon city)",
            3213:"Sutor Chic Manor (Rethymnon city)",
            3214:"Swell Boutique (Rethymnon city)",
            2383:"Thalassa Boutique (Rethymnon)",
            3215:"The Syntopia (Adelianos Kampos, Rethymnon)",
            3216:"Theros (Rethymnon city)",
            3218:"V77 Seafront (Rethymnon city)",
            2380:"Veneto (Rethymnon)",
            3220:"Vila Casa Atimamo (Rethymnon city)",
            3221:"Vista Del Porto Luxury Suites (Rethymnon city)",
            3222:"White Swan (Rethymnon city)"*/
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
					SecureToken : "e423ce2a-a4db-4edf-b089-5d815ac80203",
					To : "obsidiantransfer@gmail.com",
					From : "sakis530@hotmail.com",
					Subject : "Booking",
					Body : "" 
					};		
	
			vm.mail['Body']=vm.message;			
			//vm.sendEmail(vm.mail);
		
		
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

function contactOnLoad(){
	vm=this;
	vm.submitContactEmail=function(){
		vm.contactName = document.getElementById("contactFullName").value;
		vm.contactEmail = document.getElementById("contactEmail").value;
		vm.contactSubject = document.getElementById("contactSubject").value;
		vm.contactMessage = document.getElementById("contactMessage").value;
		
		
		
		vm.mail={ 
					SecureToken : "e423ce2a-a4db-4edf-b089-5d815ac80203",
					To : "info@obsidiantransfers.gr",
					From : "sakis530@hotmail.com",
					Subject : "Booking",
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

function privateTourPacks(id){
		
		window.location.href=('./readmore.html?tourId='+id);
}

function setCookie(name, value, days, path, domain, secure) {
    let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
    if (days) {
		alert()
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        cookie += "; expires=" + date.toUTCString();
    }
    
    if (path) {
        cookie += "; path=" + path;
    }
    
    if (domain) {
        cookie += "; domain=" + domain;
    }
    
    if (secure) {
        cookie += "; secure";
    }
    
    document.cookie = cookie;
}

function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}






