## Instructions for fronend:

Installing Dependencies by running

### `npm install`

then navigate to the project directory and run

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Login credentials

### admin access from fronend

`email: admin@mail.com password: 123456 `

## Implemented features

- User role (admin as a doctor) and user (as a patient)
- User can book appoinment after login
- Available slots will appear according to calender selection
- Doctor can mark avaialbe slots based on calender selection day
- Admin will get email when there is a booking


## Instructions for backend:

### Make an .env file in the root directory and paste this credentials

```
NODE_ENV=development
PORT=5000
MONGO_URL= mongodb+srv://shahnewaztameem:tamim141@doctorsappoinment.dt89h.mongodb.net/doctorsappoinment?retryWrites=true&w=majority
```
### Local env url
` http://localhost:5000`

### API endpoints
- `POST, PUT /api/users - create and update users`
- `GET /api/users/:email - get user by email`
- `GET /api/users/admin - make user an admin`
- `POST /api/appoinments - create an appoinment`
- `GET /api/appoinments - get appoinemnt by user`
- `POST /api/bookings - create a booking schedule`
- `GET /api/bookings - get all the available bookings`
