// main class object
class RentalProperty {
    // constructor
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
    // getter methods
    getName() {
        return this.name;
    };
    getPrice() {
        return this.price;
    }
    getRating() {
        return this.rating;
    }
    getLocation() {
        return this.location;
    }
    getRooms() {
        return this.rooms;
    }
    getAvailability() {
        return this.availability;
    }
    getFeatures() {
        return this.features;
    }
}

//sub class SpecialRate
class SpecialRate extends RentalProperty {
    constructor(name, price, rating, location, rooms, availability, features, specialR) {
        super(name, price, rating, location, rooms, availability, features);
        this.specialR = specialR;
    }
    getSpecialR() {
        return this.specialR;
    }
}

//sub class Super Host Porperty
class SuperHost extends RentalProperty {
    constructor(name, price, rating, location, rooms, availability, features, hostRating) {
        super(name, price, rating, location, rooms, availability, features);
        this.hostRating = hostRating;
    }
    getHostRating() {
        return this.hostRating;
    }
}

// object instances
let boracayHotel = new RentalProperty('Hotel Le Soliel De Boracay', 120, 8, 'Balabag, Boracay Island', 10, 1, 'Free WiFi, Air Conditioned, TV, Pool, and Spa');

let hennanResort = new RentalProperty('Henann Resort Alona Beach', 160, 8.9, 'Panglao Island', 30, 6, 'Free WiFi, Air Conditioned, TV, Pool, and Gym');

let palawanHotel = new SpecialRate('Daluyon Beach and Mountain Resort', 155, 8.7, 'Puerto Princesa, Palawan Island', 15, 4, 'Free WiFi, TV, Pool, and Spa', 0.8);

let uptownHotel = new SuperHost('Boracay Uptown', 107, 8, 'Balabag, Boracay Island', 20, 11, 'Free WiFi, Pets, Air Conditioned, Pool, and Spa', 9.5);

//HTML elements and text nodes
let h2 = document.querySelectorAll('h2');
let about = document.querySelectorAll('.about');
let infoBtn = document.querySelectorAll('.infoBtn');
let p = document.querySelectorAll('p');



// Display Fitst Property
h2[0].innerHTML = 'Hotel Name: ' + boracayHotel.getName();

//the event when click button displays the description
infoBtn[0].addEventListener('click', function() {

    p[0].innerHTML = 'Price: ' + boracayHotel.getPrice() + '<br />' +
        'Rating: ' + boracayHotel.getRating() + '/10<br />' +
        'Location: ' + boracayHotel.getLocation() + '<br />' +
        'Rooms: ' + boracayHotel.getRooms() + '<br />' +
        'Room Features: ' + boracayHotel.getFeatures() + '<br />' +
        '<button class="btn1">Available Rooms</button>';

    let btn = document.querySelector('.btn1');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[1].innerHTML = 'Available Rooms: ' + boracayHotel.getAvailability();
    });

});

// display about the hotel
about[0].addEventListener('click', function() {
    p[0].innerHTML = 'Le Soleil de Boracay Hotel is conveniently located in the popular Station 2 area. The hotel offers a wide range of amenities and perks to ensure you have a great time. To be found at the hotel are free Wi-Fi in all rooms, 24-hour front desk, 24-hour room service, express check-in/check-out, luggage storage. Guestrooms are fitted with all the amenities you need for a good night\'s sleep. In some of the rooms, guests can find non smoking rooms, air conditioning, wake-up service, desk, mini bar. The hotel\'s peaceful atmosphere extends to its recreational facilities which include private beach, fitness center, outdoor pool, massage, garden. No matter what your reasons are for visiting Boracay Island, Le Soleil de Boracay Hotel will make you feel instantly at home.';
    p[1].innerHTML = '';
});



// Display Second Property
h2[1].innerHTML = 'Hotel Name: ' + hennanResort.getName();

//the event when click button displays the description
infoBtn[1].addEventListener('click', function() {

    p[2].innerHTML = 'Price: ' + hennanResort.getPrice() + '<br />' +
        'Rating: ' + hennanResort.getRating() + '/10<br />' +
        'Location: ' + hennanResort.getLocation() + '<br />' +
        'Rooms: ' + hennanResort.getRooms() + '<br />' +
        'Room Features: ' + hennanResort.getFeatures() + '<br />' +
        '<button class="btn2">Available Rooms</button>';

    let btn = document.querySelector('.btn2');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[3].innerHTML = 'Available Rooms: ' + hennanResort.getAvailability();
    });

});

// display about the hotel
about[1].addEventListener('click', function() {
    p[2].innerHTML = 'Dip into one of the 3 outdoor swimming pools or enjoy other recreational amenities, which include a fitness center.The rooms have a flat-screen TV. Some rooms include a seating area to relax in after a busy day. The rooms are equipped with a private bathroom. Extras include free toiletries and a hair dryer.Grab a bite to eat at the resort\'s restaurant, where you can take in a pool view, or stay in and take advantage of room service (during limited hours). Relax with a refreshing drink from a bar/lounge or one of the 3 poolside bars.';
    p[3].innerHTML = '';
});




// Display Third Property
h2[2].innerHTML = 'Hotel Name: ' + palawanHotel.getName();

//the event when click button displays the description
infoBtn[2].addEventListener('click', function() {
    let value = 100 - (100 * palawanHotel.getSpecialR());

    p[4].innerHTML = 'Price: ' + palawanHotel.getPrice() * palawanHotel.getSpecialR() + '<span>Original Price: ' + palawanHotel.getPrice() + '</span><span> Discount: ' + value + '% OFF </span><br />' +
        'Rating: ' + palawanHotel.getRating() + '/10<br />' +
        'Location: ' + palawanHotel.getLocation() + '<br />' +
        'Rooms: ' + palawanHotel.getRooms() + '<br />' +
        'Room Features: ' + palawanHotel.getFeatures() + '<br />' +
        '<button class="btn3">Available Rooms</button>';

    let btn = document.querySelector('.btn3');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[5].innerHTML = 'Available Rooms: ' + palawanHotel.getAvailability();
    });

});

// display about the hotel
about[2].addEventListener('click', function() {
    p[4].innerHTML = 'A destination consecutively named as World’s Best Island located in the Western part of the tropical island of the Philippines, Daluyon Beach and Mountain Resort, is a luxury eco/green resort and private beach resort offering luxurious beachfront cabanas with all contemporary comforts of a home.​​ <br />Daluyon Beach and Mountain Resort is located in a prime location, providing everyone the opportunity to explore, as it is home of the UNESCO World Heritage Site and one of the New 7 Wonders of Nature – The Puerto Princesa Subterranean River National Park.';
    p[5].innerHTML = '';
});


// Display Fourth Property
h2[3].innerHTML = 'Hotel Name: ' + uptownHotel.getName();

//the event when click button displays the description
infoBtn[3].addEventListener('click', function() {

    p[6].innerHTML = 'Price: ' + uptownHotel.getPrice() + '<br />' +
        'Rating: ' + uptownHotel.getRating() + '/10<br />' +
        'Location: ' + uptownHotel.getLocation() + '<br />' +
        'Rooms: ' + uptownHotel.getRooms() + '<br />' +
        'Room Features: ' + uptownHotel.getFeatures() + '<br />' +
        'Host Rating: ' + uptownHotel.getHostRating() + '<br />' +
        '<button class="btn4">Available Rooms</button>';

    let btn = document.querySelector('.btn4');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[7].innerHTML = 'Available Rooms: ' + uptownHotel.getAvailability();
    });

});

// display about the hotel
about[3].addEventListener('click', function() {
    p[6].innerHTML = 'Boracay Uptown is a beach front resort located in Boracay Island, Philippines and is four kilometres from Diniwid Beach and eight kilometres from Godofredo P. Ramos Airport. The resort offers guests in-room air-conditioning and water sports activities. <br /> The colourful rooms come with mini bars, flat-screen TVs, and electric kettles. There are also en suite bathrooms, toiletries and safes. <br /> Amenities include a 24-hour reception, laundry and airport shuttle services for a charge, as well as a concierge and a tour desk. There\'s also an outdoor pool with panoramic ocean views and a sun deck.';
    p[7].innerHTML = '';
});
