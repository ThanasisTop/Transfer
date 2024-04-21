
const urlParams = new URLSearchParams(window.location.search);
const tourId = urlParams.get('tourId');


function getTour(tourId){
	
	if(tourId==1){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/minoan-bull.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Chania - Heraklion</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/minoan-bull.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Chania - Heraklion: Exploring Minoan Civilization and Modern City Life</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Begin your day with a serene drive from Chania to Heraklion, enjoying the enchanting views of the Cretan Sea and the unique landscapes of Crete.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">320 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price2" style="color: #DAA520;">380 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price3" style="color: #DAA520;">440 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Route: </b>'+
				'Begin your day with a serene drive from Chania to Heraklion, enjoying the enchanting views of the Cretan Sea and the unique landscapes of Crete.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Photo Stop: </b>'+
				'Make a photo stop at a panoramic point 1 km before Rethymnon, where the breathtaking views of the surrounding area will captivate you.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Knossos: </b>'+
				'Visit the Palace of Knossos, the epicenter of Minoan civilization, where you\'ll discover the secrets of the ancient Minoans through a journey into history and mythology.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Museum: </b>'+
				'Explore the Heraklion Archaeological Museum, which hosts exhibits spanning over 5,500 years of history, from the Minoan era to the Byzantine past.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Heraklion: </b>'+
				'Allow yourself some free time for exploration, shopping, and dining in the vibrant streets of Heraklion.';
				
		document.getElementById('details6').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'The tour lasts approximately 9 hours, from 09:00 to 18:00.';
	}
	
	if(tourId==2){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/kournas.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Chania - Lake Kournas and Rethymno City</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/kournas.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Excursion from Chania to Lake Kournas and Rethymno City</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Embark on a scenic drive along the northern coast of Crete from Chania, with expansive views of the shimmering Cretan Sea enriching your journey.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">240 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price2" style="color: #DAA520;">300 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price3" style="color: #DAA520;">400 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Route: </b>'+
				'Embark on a scenic drive along the northern coast of Crete from Chania, with expansive views of the shimmering Cretan Sea enriching your journey.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Olive Oil Mill Visit: </b>'+
				'Dive into the world of Cretan olive oil at a local mill where you will learn about the age-old traditions and modern techniques of olive oil production. Experience firsthand how olives transform into the golden oil revered worldwide.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Lake Kournas: </b>'+
				'Explore Lake Kournas, Crete’s only natural freshwater lake. Nestled amongst lush olive groves, this idyllic spot is perfect for relaxation or a leisurely stroll along its tranquil shores.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno City: </b>'+
				'Wander through the enchanting streets of Rethymno, a city influenced by Venetian artistry and architecture. Visit the historic Fortezza Castle, perched atop a hill, offering panoramic views of the city and sea.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This full-day tour lasts approximately 7-8 hours, from 09:00 to 17:00, allowing ample time to soak in the beauty and culture of each location.';
		
	}
	
	if(tourId==3){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/explore_chania.png\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Cultural Heritage and Artisan Craft Tour from Chania</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/explore_chania.png\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Cultural Heritage and Artisan Craft Tour from Chania</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Step into the revered grounds of the Arkadi Monastery, a powerful symbol of Crete\'s struggle for independence. Discover the rich history and the indomitable spirit of Cretan resistance that this iconic monastery embodies</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">290 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price2" style="color: #DAA520;">320 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price3" style="color: #DAA520;">400 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Arkadi Monastery: </b>'+
				'Step into the revered grounds of the Arkadi Monastery, a powerful symbol of Crete\'s struggle for independence. Discover the rich history and the indomitable spirit of Cretan resistance that this iconic monastery embodies.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Ancient Eleftherna: </b>'+
				'Explore the ancient ruins of Eleftherna, where excavations reveal the layers of Greek, Roman, and Byzantine history. This significant archaeological site offers a unique glimpse into the past, showcasing artifacts and structures that tell tales of the ancient world.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Margarites: </b>'+
				'Visit the charming village of Margarites, renowned for its pottery and Venetian architectural influences. Witness the age-old tradition of pottery-making with local artisans, where you can see how traditional techniques are preserved in creating beautiful, functional art.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno: </b>'+
				'Wander through the picturesque Venetian old town of Rethymno. With its narrow streets, historic buildings, and vibrant cultural scene, Rethymno offers a perfect blend of history and modernity, making it a fascinating part of any visit to Crete.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'Enjoy a full-day adventure spanning 9 hours (09:00-18:00), designed to offer a comprehensive experience of Cretan culture, history, and artisanship.';
		
		
	}
	
	if(tourId==4){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/Bali-Rethymno-Crete-Greece-allincrete.com-44.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Chania - Rethymno, Bali, and Melidoni</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/Bali-Rethymno-Crete-Greece-allincrete.com-44.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Crete Coastal and Cultural Tour: Chania to Rethymno, Bali, and Melidoni</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">The gorge of Samaria is situated in the National park of Samaria, in the White Mountains in West Crete. This majestuous gorge is considered one of the great attractions of Crete and many tourists want to visit it.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">290 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price2" style="color: #DAA520;">320 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price3" style="color: #DAA520;">400 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno: </b>'+
				'Dive into the heart of Cretan history as you explore the enchanting city of Rethymno. Wander through streets lined with Venetian and Ottoman architecture, and immerse yourself in the rich cultural tapestry that this historic city has to offer.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Bali: </b>'+
				'Unwind in the serene coastal village of Bali. Nestled in a protected bay, it\'s the perfect spot for relaxation or a dip in the azure waters of the Mediterranean. Enjoy the tranquil beaches and the local cuisine at charming seaside tavernas.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Olive Mill: </b>'+
				'Gain a deeper understanding of Crete\'s culinary heritage at the Melidoni Olive Mill. Learn about traditional olive oil production and witness the extraction processes that transform olives into liquid gold.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Honey Museum: </b>'+
				'Explore the fascinating world of beekeeping at the Melidoni Honey Museum. Discover the ancient techniques and the importance of beekeeping in Cretan culture through engaging exhibits and historical finds.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Cave: </b>'+
				'Visit the historic Melidoni Cave, known for its significant archaeological findings and a rich history that echoes through its chambers. Experience the awe as you delve into the depths where ancient artifacts have been unearthed.';
				
		document.getElementById('details6').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This comprehensive 9-hour tour runs from 09:00 to 18:00, offering a full day of exploration and discovery.';
		
	}
	
	if(tourId==5){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/kourtaliotikogorge.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Chania - Spili, Kourtaliotiko Gorge, and Rethymno</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/kourtaliotikogorge.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Discover Crete’s Natural and Historical Treasures: From Chania to Spili, Kourtaliotiko Gorge, and Rethymno</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Begin your adventure in the charming village of Spili, nestled in the heart of Crete. Known for its vibrant atmosphere and crystal-clear springs, Spili also boasts traditional Cretan architecture and local crafts that reflect the rich cultural heritage of the region.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">290 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price2" style="color: #DAA520;">320 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price3" style="color: #DAA520;">400 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span>Spili: </b>'+
				'Begin your adventure in the charming village of Spili, nestled in the heart of Crete. Known for its vibrant atmosphere and crystal-clear springs, Spili also boasts traditional Cretan architecture and local crafts that reflect the rich cultural heritage of the region.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Kourtaliotiko Gorge: </b>'+
				'Venture into the breathtaking Kourtaliotiko Gorge, one of Europe’s largest gorges. Here, nature enthusiasts can capture stunning photographs of the dramatic cliffs and lush vegetation. Listen for the sound of the Kourtaliotis River flowing beneath the towering canyon walls—a truly magnificent sight.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Preveli or Kalypso Beach: </b>'+
				'Choose between two of Crete’s most picturesque beaches for a relaxing afternoon. Preveli Beach, with its famous palm forest and river, offers a unique tropical escape. Alternatively, Kalypso Beach provides a serene hideaway, ideal for snorkeling and sunbathing in a secluded cove.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno: </b>'+
				'Conclude your day in the historic town of Rethymno. Take a leisurely stroll through the old town, where Venetian and Ottoman influences are woven into the fabric of local life. Admire the well-preserved Venetian harbor and the majestic Fortezza, a fortress that stands as a reminder of Rethymno’s storied past.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This full-day excursion lasts approximately 9 hours, from 09:00 to 18:00, allowing you ample time to soak in the beauty and history of each location.';
				
		
	}
	
	if(tourId==6){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/elafonisi-1.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Day Trip Rethymno/Bali - Elafonisi</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/elafonisi-1.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Day Trip Rethymno/Bali - Elafonisi</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Engage in a variety of beach activities including swimming in the gentle waves, sunbathing on the soft pink sands, and capturing the stunning beauty of the landscape through photography.</p>';
		
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 270 €</h2><h2 id="price1" style="color: #DAA520;">Bali 290 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 330 €</h2><h2 id="price1" style="color: #DAA520;">Bali 350 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 400 €</h2><h2 id="price1" style="color: #DAA520;">Bali 420 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Activities: </b>'+
				'Engage in a variety of beach activities including swimming in the gentle waves, sunbathing on the soft pink sands, and capturing the stunning beauty of the landscape through photography.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Environment: </b>'+
				'Elafonisi is not just a beach; it\'s an exotic destination featuring picturesque landscapes that create a postcard-perfect setting. The beach is enveloped by a unique ecological system that adds to its exotic allure, making it a must-visit for nature lovers.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Preveli or Kalypso Beach: </b>'+
				'Choose between two of Crete’s most picturesque beaches for a relaxing afternoon. Preveli Beach, with its famous palm forest and river, offers a unique tropical escape. Alternatively, Kalypso Beach provides a serene hideaway, ideal for snorkeling and sunbathing in a secluded cove.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno: </b>'+
				'For trips originating from Bali, the excursion includes an exploration of Rethymno’s Old Town, where the rich history and Venetian architecture captivate visitors';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'Spend approximately 8-9 hours (09:00-18:00) in this paradisiacal location, allowing ample time to fully enjoy all that Elafonisi has to offer.';
		
		
	}
	
	if(tourId==7){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/knossos-palace.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Rethymno/Bali - Heraklion</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/knossos-palace.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Rethymno/Bali - Heraklion Excursion: Knossos and City</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Embark on a scenic journey from Rethymno/Bali to Heraklion, where you’ll be treated to stunning views of the Cretan Sea along the way. This picturesque route sets the tone for a day of exploration and discovery.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 230 €</h2><h2 id="price1" style="color: #DAA520;">Bali 210 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 300 €</h2><h2 id="price1" style="color: #DAA520;">Bali 280 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 380 €</h2><h2 id="price1" style="color: #DAA520;">Bali 360 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Route: </b>'+
				'Embark on a scenic journey from Rethymno/Bali to Heraklion, where you’ll be treated to stunning views of the Cretan Sea along the way. This picturesque route sets the tone for a day of exploration and discovery.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Knossos: </b>'+
				'Step back in time with a visit to the iconic Palace of Knossos, the ceremonial and political center of the Minoan civilization. Explore this ancient complex known as the labyrinth of the legendary Minotaur and marvel at the advanced architectural skills of the early Europeans.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Museum: </b>'+
				'Continue your journey into the past at the Heraklion Archaeological Museum, one of the most significant museums in Greece. This museum houses a vast collection of artifacts from all over Crete, spanning 5,500 years of history, including the world-renowned Minoan art.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Heraklion: </b>'+
				'Enjoy free time in the vibrant city of Heraklion. Take the opportunity to explore its lively streets, shop for local goods, and savor Cretan culinary delights in one of the many restaurants or cafes.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This full-day excursion lasts 9 hours (09:00-18:00), allowing you to immerse yourself fully in the rich history and bustling life of Heraklion.';
				
		document.getElementById('details6').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno : </b>'+
				'For those departing from Bali, the tour includes a visit to the historic Old Town of Rethymno, a treasure trove of medieval architecture and Venetian elegance.';		
		
		
	}
	
	if(tourId==8){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/Watercity-Waterpark-Anopolis-Heraklion-Crete-18.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Rethymno - Water City Heraklion</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/Watercity-Waterpark-Anopolis-Heraklion-Crete-18.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Excursion from Rethymno to Water City Heraklion</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Dive into a day of exhilarating fun at Crete\'s largest water park, Water City Heraklion. Perfect for families and thrill-seekers alike, this park offers a variety of water slides and attractions designed to deliver splashes and smiles.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 230 €</h2><h2 id="price1" style="color: #DAA520;">Bali 210 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 300 €</h2><h2 id="price1" style="color: #DAA520;">Bali 280 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 380 €</h2><h2 id="price1" style="color: #DAA520;">Bali 360 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Attractions: </b>'+
				'Enjoy a wide range of water slides, from adrenaline-pumping drops to gentle flows, suitable for all ages. Along with thrilling water games, the park is equipped with state-of-the-art facilities ensuring a day full of excitement and adventure.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Relaxation: </b>'+
				'Take a break between the fun with multiple relaxation zones throughout the park. Indulge in a variety of dining options available, offering everything from light snacks to full meals to recharge your energy.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'Spend a full day, approximately 9 hours, at the water park, giving you ample time to explore all the attractions and relax in the sun.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno : </b>'+
				'For those coming from Bali, the excursion includes an opportunity to explore Rethymno\'s Old Town. Wander through historic streets, marvel at the Venetian architecture, and absorb the charming atmosphere of this beautiful town.';
		
		
	}
	
	if(tourId==9){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/Kalypso.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Rethymno/Bali - Spili, Kourtaliotiko Gorge and Preveli/Kalypso Beach</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/Kalypso.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Excursion from Rethymno/Bali to Spili, Kourtaliotiko Gorge, and Preveli/Kalypso Beach</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Explore the historic village of Spili, renowned for its lion-headed springs and lush natural surroundings. Wander through its charming streets and discover the refreshing water flowing from numerous fountains, a serene backdrop to this picturesque village.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 230 €</h2><h2 id="price1" style="color: #DAA520;">Bali 240 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 300 €</h2><h2 id="price1" style="color: #DAA520;">Bali 320 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 380 €</h2><h2 id="price1" style="color: #DAA520;">Bali 400 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Spili: </b>'+
				'Explore the historic village of Spili, renowned for its lion-headed springs and lush natural surroundings. Wander through its charming streets and discover the refreshing water flowing from numerous fountains, a serene backdrop to this picturesque village.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Kourtaliotiko Gorge: </b>'+
				'Visit the awe-inspiring Kourtaliotiko Gorge, a natural marvel celebrated for its dramatic cliffs and diverse flora and fauna. Capture the beauty of this stunning locale with a photo stop that promises breathtaking views and unforgettable memories.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Preveli or Kalypso Beach: </b>'+
				'Choose to unwind at one of two spectacular beaches: Preveli, with its unique river and palm tree forest that flows into the sea, or Kalypso, known for its crystal-clear waters and serene atmosphere, perfect for swimming and relaxation.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This delightful excursion lasts approximately 8 hours, providing plenty of time to enjoy each location\'s unique attractions.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Rethymno : </b>'+
				'For guests departing from Bali, the tour includes a visit to the historic Old Town of Rethymno. Take in the ancient and Renaissance architecture and the lively ambiance of this captivating town.';
		
		
	}
	
	if(tourId==10){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/argiroupoli.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Rethymno/Bali - Lake Kournas, Argyroupoli, Georgioupoli, and Olive Mill</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/argiroupoli.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Excursion from Rethymno/Bali - Lake Kournas, Argyroupoli, Georgioupoli, and Olive Mill</h2>';
		document.getElementById('readMoreDesc').innerHTML = '<p id="readMoreDesc">Experience the tranquility of Crete’s only natural freshwater lake, Lake Kournas. Ideal for swimming and photography, its clear waters and scenic surroundings make it a perfect nature getaway.</p>';
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 200 €</h2><h2 id="price1" style="color: #DAA520;">Bali 210 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 260 €</h2><h2 id="price1" style="color: #DAA520;">Bali 280 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">Rethymno 340 €</h2><h2 id="price1" style="color: #DAA520;">Bali 360 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Lake Kournas: </b>'+
				'Experience the tranquility of Crete’s only natural freshwater lake, Lake Kournas. Ideal for swimming and photography, its clear waters and scenic surroundings make it a perfect nature getaway.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Argyroupoli: </b>'+
				'Delve into the history of Argyroupoli, a village known for its ancient springs and Roman ruins. Explore the lush greenery, cascading waters, and remnants of its rich past.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Georgioupoli: </b>'+
				'Unwind on the sands of Georgioupoli Beach, a serene spot perfect for sunbathing and swimming with views of the expansive Mediterranean.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This full-day adventure lasts approximately 8 hours, providing a rich blend of natural beauty and cultural heritage.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Olive Mill: </b>'+
				'Visit a traditional olive mill to learn about the artisanal process of olive oil production. Enjoy a tasting session of fresh, high-quality olive oil straight from the press.';
		
	}
	
	if(tourId==11){
		document.getElementById('readMoreSection').style.backgroundImage = 'url(\'images/rethymno.jpg\')';
		document.getElementById('readMoreTitle').innerHTML = '<h1 id="readMoreTitle" class="mb-3 bread">Rethymno - Bali and Melidoni</h1>';
		
		document.getElementById('sectionBgImage').style.backgroundImage = 'url(\'images/rethymno.jpg\')';
		document.getElementById('detailsTitle').innerHTML = '<h2 id="detailsTitle" class="mb-4">Excursion from Rethymno to Bali and Melidoni</h2>';
		
		
		document.getElementById('price1').innerHTML = '<h2 id="price1" style="color: #DAA520;">230 €</h2>';
		document.getElementById('extrahour1').innerHTML = '<p class="text-muted" id="extrahour1">Taxi</p>';
		document.getElementById('price2').innerHTML = '<h2 id="price1" style="color: #DAA520;">270 €</h2>';
		document.getElementById('extrahour2').innerHTML = '<p class="text-muted" id="extrahour2">Mini Van</p>';
		document.getElementById('price3').innerHTML = '<h2 id="price1" style="color: #DAA520;">340 €</h2>';
		document.getElementById('extrahour3').innerHTML = '<p class="text-muted" id="extrahour3">Mini Bus</p>';
		
		document.getElementById('details1').innerHTML='<b><span class="icon icon-map-marker"></span> Bali, Rethymno: </b>'+
				'Relax in the picturesque coastal area of Bali, known for its tranquil beaches and stunning sea views. A perfect place for those seeking peace and natural beauty.';
				
		document.getElementById('details2').innerHTML=
				'<b><span class="icon icon-map-marker"></span> Argyroupoli: </b>'+
				'Delve into the history of Argyroupoli, a village known for its ancient springs and Roman ruins. Explore the lush greenery, cascading waters, and remnants of its rich past.';
				
		document.getElementById('details3').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Olive Mill: </b>'+
				'Explore the traditional Melidoni Olive Mill, where you’ll learn about the olive oil extraction process and the art of olive cultivation in Crete.';
				
		document.getElementById('details4').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Honey Museum: </b>'+
				'Discover the fascinating world of beekeeping at the Melidoni Honey Museum. Learn about traditional methods and the importance of bees in the ecosystem through detailed exhibits.';
				
		document.getElementById('details5').innerHTML='<b><span class="icon icon-map-marker"></span> Melidoni Cave: </b>'+
				'Venture into the historic Melidoni Cave, known for its significant archaeological discoveries and its deep cultural and historical significance.';
				
		document.getElementById('details6').innerHTML='<b><span class="icon icon-map-marker"></span> Duration: </b>'+
				'This enriching 9-hour excursion (09:00-18:00) offers insights into traditional Cretan life and natural wonders.';
	}
}

getTour(tourId);