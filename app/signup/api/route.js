import { connectDB } from '@/lib/connectDB';

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const isExist = await userCollection.findOne({ email: newUser?.email });
    if (isExist) {
      return Response.json({ message: 'User already exist with this email' }, { status: 409 });
    }
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: 'User added successfully', res });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error adding user', error }, { status: 500 });
  }
};
