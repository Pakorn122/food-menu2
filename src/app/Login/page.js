'use client';
import { useState } from "react";
import {signIn} from "next-auth/react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(null); 
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn('Credentials')

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      {error && <div className="alert alert-danger">{error.message}</div>}
      <h1 className="text-center text-primary text-4xl mb-4 italic">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
     
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
          aria-describedby={error && "email-error"} 
        />
        <div id="email-error" className="error-message">{error?.email}</div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
          aria-describedby={error && "password-error"}
        />
        <div id="password-error" className="error-message">{error?.password}</div>
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
