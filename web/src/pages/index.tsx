import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export function Index() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const login = useGoogleLogin({
    scope: import.meta.env.VITE_SCOPE,
    onError:() => {},
    onSuccess: (token) => {
      signIn(token);
      navigate('/dashboard')
    }
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button variant="secondary" onClick={() => login()}>
        Altenticar com o Google
      </Button>
    </div>
  )
}