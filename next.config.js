// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://mainUser:sawa123xx@cluster0-x81cm.mongodb.net/loc-react-reserve?retryWrites=true&w=majority',
    JWT_SECRET: '<insert-jwt-secret>',
    CLOUDINARY_URL: '<insert-cloudinary-url>',
    STRIPE_SECRET_KEY: '<insert-stripe-secret-key>',
  },
}
