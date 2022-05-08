import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../assets/imgs/logo.svg';

const LogoutButton = ({}) => {
  const { user, logout, isLoading, isAuthenticated } = useAuth0()

  if (isAuthenticated){
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {isLoading ? (
          <div className="w-10 h-10 rounded-full bg-light-surface-text-secondary"></div>
        ): (
          <img className="w-10 h-10 rounded-full" src={user?.picture} alt="foto do usuário" />
        )}
        
      </div>
      <button className="text-sm text-light-surface-text-secondary dark:text-dark-surface-text-secondary" onClick={() => logout({ returnTo: window.location.origin })}>
        Sair
      </button>
    </div>
  )}

  return null
}

export const Nav = () => {
  return (
    <nav className="
    bg-light-surface-secondary-main dark:bg-dark-surface-secondary-main w-screen h-18
      flex justify-between items-center md:py-8 md:px-40 px-20
    ">
      <img className="sm:w-32 w-24" src={Logo} alt="logo" />
      <LogoutButton/>
    </nav>
  )
}
