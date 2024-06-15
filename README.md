
PROJECT NAME : Car Rental Reservation System
LIVE SERVER  : https://assignment-three-seven.vercel.app

This is a Car rental reservation system site where users can get many cars and book.

What users can do : 
- 1. user can sign up and login.
- 2. user can get single specific car or all the cars.
- 3. user can book a car.
- 4. users can get their own bookings by using JWT token.

What admins can do :
- 1. admin can create a new car for rent.
- 2. admin can update a car.
- 3. admin can delete a car.
- 4. admin can get all the bookings and filter by carId and booking date.
- 5. admin can take the return car from users by getting 'bookingId and endTime' 

Features : 
- 1. Error handling has been implemented.
- 2. The application has been secured by using 'Authentication Middleware'
- 3. Zod validation has been used.
- 4. Authentication and Authorization have been implemented.


How to run the project locally?

- 1. Install all the dependencies by this command 'npm install'.
- 2. Replace the 'DATABASE_URL' in .env file by your database_url.
- 3. To run the server use this command "node dist/server.js"
- 4. To compile the typescript files use this "npm run build"

The packages used in this project :  

- 1. Express js
- 2. Zod
- 3. Dotenv
- 4. Cors
- 5. Typescript
- 6. JWT
- 7. mongoose