import DrawerNavbar from '@/components/dashboard/DrawerNavbar';
import React from 'react'

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
        <DrawerNavbar />
        {children}
    </div>
  )
}

export default DashboardLayout;
