import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';

export function Index() {
  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube.upload"
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button variant="secondary" onClick={() => login()}>
        Altenticar com o Google
      </Button>
    </div>
  )
}