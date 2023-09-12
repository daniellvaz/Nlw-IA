import { GoogleLogin } from '@react-oauth/google';

import { Button } from "@/components/ui/button";

export function Index() {


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="p-4 border-[1px] border-zinc-500">
        <GoogleLogin 
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </form>
    </div>
  )
}