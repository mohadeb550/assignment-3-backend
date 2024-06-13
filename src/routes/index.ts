
import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CarRoutes } from '../modules/car/car.route';
import { BookingRoutes } from '../modules/booking/booking.route';
const router = express.Router()


const moduleRoutes = [
    {
      path: '/auth',
      route: AuthRoutes,
    },
    {
      path: '/cars',
      route: CarRoutes,
    },
    {
      path: '/bookings',
      route: BookingRoutes,
    },
  ];
  
  moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
