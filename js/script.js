function createBooking(){
	  const pickUpLocValue = document.getElementById('pick-up-location').value;
	  const dropOffLocValue = document.getElementById('drop-off-location').value;
	  const pickUpDateValue = document.getElementById('book_pick_date').value;
	  const returnDateValue = document.getElementById('return_date').value;
	  const pickUpTimeValue = document.getElementById('time_pick').value;
	  const returnTimeValue = document.getElementById('time_return').value;
	  const peopleValue = document.getElementById('people').value;
	  
	  localStorage.setItem('pickUpLocValue', pickUpLocValue);
	  localStorage.setItem('dropOffLocValue', dropOffLocValue);
	  localStorage.setItem('pickUpDateValue', pickUpDateValue);
	  localStorage.setItem('returnDateValue', returnDateValue);
	  localStorage.setItem('pickUpTimeValue', pickUpTimeValue);
	  localStorage.setItem('returnTimeValue', returnTimeValue);
	  localStorage.setItem('peopleValue', peopleValue);
	 
	  window.location.href="book.html";
	 
}

function indexOnLoad(){
	
	vm=this;
	vm.initialize=function(){
		document.getElementById("time_return").disabled=true;
		document.getElementById("return_date").disabled=true;
	}
	vm.initialize();
	
	vm.disableField=function(){
		if(document.getElementById("time_return").disabled==false && document.getElementById("return_date").disabled==false){
			document.getElementById("time_return").disabled=true;
			document.getElementById("return_date").disabled=true;
			return;
		}
		document.getElementById("time_return").disabled=false;
		document.getElementById("return_date").disabled=false;
		
	}
	
}


function bookingOnLoad(){
	
	vm=this;
	vm.initialize=function(){
		vm.form = document.getElementById('contactInformationForm')
		vm.pickUpLoc = localStorage.getItem('pickUpLocValue');
		vm.dropOffLoc = localStorage.getItem('dropOffLocValue');
		vm.pickUpDate = localStorage.getItem('pickUpDateValue');
		vm.returnDate = localStorage.getItem('returnDateValue');
		vm.pickUpTime = localStorage.getItem('pickUpTimeValue');
		vm.returnTime = localStorage.getItem('returnTimeValue');
		vm.people = localStorage.getItem('peopleValue');
		
		document.getElementById('pick-up-location-result').textContent=vm.pickUpLoc;
		document.getElementById('drop-off-location-result').textContent=vm.dropOffLoc;
		document.getElementById('pick-up-date-result').textContent=vm.pickUpDate;
		document.getElementById('return-date-result').textContent=vm.returnDate;
		document.getElementById('pick-up-time-result').textContent=vm.pickUpTime;
		document.getElementById('return-time-result').textContent=vm.returnTime;
		document.getElementById('people-result').textContent=vm.people;
		
		
	}
	vm.initialize();
	
	vm.submit=function(){
		vm.fullName = document.getElementById('fullName');
		vm.yourEmail= document.getElementById('email').value;
		vm.emailConfirmation = document.getElementById('emailConfirmation').value;
		vm.mobilePhone = document.getElementById('mobilePhone').value;
		
		if(vm.yourEmail != vm.emailConfirmation){
			alert('Confirmation email is different with email');
			return;
		}
	}
	
}
