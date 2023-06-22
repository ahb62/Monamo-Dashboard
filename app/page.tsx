import Image from 'next/image'
import HeaderSection from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Login = async () => {
  
  const url = "http://localhost:3001/auth/login";
  const res = await fetch(url, 
    {
      method: "POST",
      mode: "no-cors",
    }
    )
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page: any = () => {
  return(
    <div>
      
      <HeroSection />
    </div>
  )
}
export default Page;

