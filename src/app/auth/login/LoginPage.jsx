import { LoginCenter } from "./loginCenter/LoginCenter";
import { LoginForm } from "./loginForm/LoginForm";
import { LoginTop } from "./loginTop/LoginTop";

export const LoginPage = () => {
  return (
    <div className="login flex flex-column-center">
      <div className="login__container animate__animated animate__zoomIn">
        <LoginTop />
        <LoginCenter />
        <LoginForm />
      </div>
    </div>
  )
}
