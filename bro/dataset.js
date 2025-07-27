const activities = {
    historical: [
        { name: "Visit the Ancient Castle", lat: 40.7128, lng: -74.0060, open: "09:00 AM", close: "05:00 PM", cost: 10, duration: 3 },
        { name: "Explore the Historic Museum", lat: 40.7129, lng: -74.0059, open: "10:00 AM", close: "06:00 PM", cost: 8, duration: 2 },
        { name: "Tour the Old Town Square", lat: 40.7135, lng: -74.0075, open: "08:00 AM", close: "08:00 PM", cost: 5, duration: 2 },
        { name: "Visit the Royal Palace", lat: 40.7140, lng: -74.0080, open: "10:00 AM", close: "06:00 PM", cost: 12, duration: 3 },
        { name: "Explore the Ancient Ruins", lat: 40.7145, lng: -74.0085, open: "09:00 AM", close: "05:00 PM", cost: 7, duration: 4 }
    ],
    nature: [
        { name: "Hiking in the National Park", lat: 40.7127, lng: -74.0061, open: "06:00 AM", close: "08:00 PM", cost: 5, duration: 4 },
        { name: "Picnic at the Lake", lat: 40.7126, lng: -74.0062, open: "24 hours", close: "24 hours", cost: 0, duration: 2 },
        { name: "Bird Watching in the Forest", lat: 40.7132, lng: -74.0072, open: "07:00 AM", close: "07:00 PM", cost: 3, duration: 3 },
        { name: "Visit the Botanical Gardens", lat: 40.7138, lng: -74.0078, open: "09:00 AM", close: "06:00 PM", cost: 6, duration: 2 },
        { name: "Explore the Waterfalls", lat: 40.7142, lng: -74.0082, open: "08:00 AM", close: "06:00 PM", cost: 4, duration: 3 }
    ],
    adventure: [
        { name: "Skydiving Experience", lat: 40.7130, lng: -74.0070, open: "09:00 AM", close: "06:00 PM", cost: 150, duration: 2 },
        { name: "Zip-lining in the Forest", lat: 40.7131, lng: -74.0071, open: "08:00 AM", close: "07:00 PM", cost: 75, duration: 3 },
        { name: "Rock Climbing Adventure", lat: 40.7136, lng: -74.0076, open: "10:00 AM", close: "05:00 PM", cost: 50, duration: 4 },
        { name: "White Water Rafting", lat: 40.7141, lng: -74.0081, open: "09:00 AM", close: "04:00 PM", cost: 80, duration: 3 },
        { name: "Bungee Jumping", lat: 40.7146, lng: -74.0086, open: "10:00 AM", close: "06:00 PM", cost: 60, duration: 2 }
    ],
    food: [
        { name: "Dining at Local Restaurants", lat: 40.7125, lng: -74.0080, open: "11:00 AM", close: "10:00 PM", cost: 25, duration: 2 },
        { name: "Food Tasting Tour", lat: 40.7124, lng: -74.0081, open: "12:00 PM", close: "05:00 PM", cost: 50, duration: 3 },
        { name: "Visit the Farmers Market", lat: 40.7133, lng: -74.0073, open: "08:00 AM", close: "02:00 PM", cost: 10, duration: 2 },
        { name: "Wine Tasting Experience", lat: 40.7139, lng: -74.0079, open: "12:00 PM", close: "08:00 PM", cost: 40, duration: 2 },
        { name: "Cooking Class with Local Chefs", lat: 40.7143, lng: -74.0083, open: "10:00 AM", close: "04:00 PM", cost: 35, duration: 3 }
    ],
    restroom: [
        { name: "Public Restroom at Central Park", lat: 40.7123, lng: -74.0063, open: "24 hours", close: "24 hours", cost: 0, duration: 0.25 },
        { name: "Restroom at Main Square", lat: 40.7130, lng: -74.0070, open: "06:00 AM", close: "10:00 PM", cost: 0, duration: 0.25 }
    ],
    transport: [
        { name: "Central Bus Terminal", lat: 40.7140, lng: -74.0085, open: "05:00 AM", close: "11:00 PM", cost: 0, duration: 0.5 },
        { name: "Main Train Station", lat: 40.7150, lng: -74.0090, open: "04:00 AM", close: "12:00 AM", cost: 0, duration: 0.5 }
    ]
};
/*Structure of the activities Object
Categories:

The activities object is divided into categories such as historical, nature, adventure, food, restroom, and transport.

Each category is a key in the object, and its value is an array of activity objects.

Activity Object:

Each activity is an object with the following properties:

name: The name of the activity.

lat: The latitude of the activity's location (used for mapping).

lng: The longitude of the activity's location (used for mapping).

open: The opening time of the activity.

close: The closing time of the activity.

cost: The cost of the activity in Rs.

duration: The duration of the activity in hours.*/