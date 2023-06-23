// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth/next'
// import { AuthOptions } from '../../api/auth/[...nextauth]/route'

// export async function GET() {
//   const session = await getServerSession(AuthOptions);
//   console.log(session);

//   if (!session) {
//     return NextResponse.json({ message: 'You are not logged in.' })
//   }

//   return NextResponse.json({ name: session.user.name })
// }