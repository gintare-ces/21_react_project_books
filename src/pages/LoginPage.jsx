// import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/forms/LoginForm';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


function LoginPage() {
  const { login } = useAuthCtx()

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


  function loginWithHooks({ email, password }) {
    const rez = signInWithEmailAndPassword(email, password);
    console.log('rez ===', rez);
  }

  // function loginFire({ email, password }) {
  //   // login with fire base

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //       console.log('user ===', user);
  //       // ivykdyti context fn login
  //       login(user)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log('errorMessage ===', errorMessage);
  //     });
  //   // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  // }
  console.log('error ===', error);
  console.log('user ===', user);
  return (
    <div className="container">
      <h1 className='display-5'>LoginPage</h1>
      <p>This is LoginPage</p>
      {error && <h3>Ivyko klaida</h3>}
      {loading && <h2>Loading...</h2>}
      {user && <h2>You arre logged in as {user.user.email}</h2>}
      {!user &&  <LoginForm onLogin={loginWithHooks} />}
     
    </div>
  );
}

export default LoginPage;