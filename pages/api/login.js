import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectDb()

export default async (req, res) => {
  const { email, password } = req.body
  try {
    //  1) check if user exists based on provided email
    const user = await User.findOne({ email }).select('+password')

    //  2) reture error if user does not exist
    if (!user) {
      return res.status(404).send('No user exists with email provided')
    }

    //  3) check if user's password matches with the one in the database
    const passwordsMatch = await bcrypt.compare(password, user.password)

    //  4) -- so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      })
      //  5) send token to client
      res.status(200).json(token)
    } else {
      res.status(401).send('Invalid Password!')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Error logging in user')
  }
}
