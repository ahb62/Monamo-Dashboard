import React from 'react';
import {useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AuthOptions } from '../api/auth/[...nextauth]/route';
const DashboardPage: React.FC = async ({}) => {
    const {data: session, status}= useSession({
        required: true,
        onUnauthenticated: () => {
            return redirect(AuthOptions.page.home)
        }
    });
    console.log(session);
    return (
        <div>
        <h1>Dashboard</h1>
        </div>
    );
}

export default DashboardPage; 