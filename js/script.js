
function indexOnLoad(){
	
	vm=this;
	vm.initialize=function(){
		document.getElementById('timereturn').style.display="none";
		document.getElementById('datereturn').style.display="none";
		vm.currentDate = new Date();
	}
	vm.initialize();
	
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
	  
	  
	  const ttl=86400000;
	  var expiryDate=new Date().getTime()+ttl;
	  
	  localStorage.setItem('pickUpLocValue', vm.pickUpLocValue);
	  localStorage.setItem('dropOffLocValue',vm.dropOffLocValue);
	  localStorage.setItem('pickUpDateValue',vm.pickUpDateValue);
	  localStorage.setItem('returnDateValue',vm.returnDateValue);
	  localStorage.setItem('pickUpTimeValue',vm.pickUpTimeValue);
	  localStorage.setItem('returnTimeValue',vm.returnTimeValue);
	  localStorage.setItem('adultsValue', vm.adultsValue);
	  localStorage.setItem('childrenValue', vm.childrenValue);
	  localStorage.setItem('infantsValue', vm.infantsValue);
	  localStorage.setItem('expiryDate',expiryDate);
	  
	  
	  
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
	
	vm.privateTourPacks=function(id){
		window.location.href=('./readmore.html?tourId='+id);
	}
}








