'use client';

import React, { useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmp6tlZ-kJaQ7ltdNMrf2VrfqJT2_nIl4',
  authDomain: 'capstone-256e1.firebaseapp.com',
  projectId: 'capstone-256e1',
  storageBucket: 'capstone-256e1.appspot.com',
  messagingSenderId: '129966569334',
  appId: '1:129966569334:web:bcedad8664829ac9f9ec57',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsLogin(true);
      }
    } catch {
      if (isLogin) {
        setErrorMessage('Password anda salah atau tidak ada akun terdaftar');
      } else {
        setErrorMessage('Email sudah digunakan');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Daftar'}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        {!isLogin && (
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-2 border rounded"
            name="name"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          name="password"
          required
        />

        <button
          type="submit"
          className={`w-full p-2 rounded text-white ${
            isLogin ? 'bg-blue-600' : 'bg-green-600'
          }`}
        >
          {isLogin ? 'Login' : 'Daftar'}
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
        )}
      </form>

      <button
        onClick={toggleForm}
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        {isLogin
          ? 'Belum punya akun? Daftar di sini'
          : 'Sudah punya akun? Login di sini'}
      </button>
    </div>
  );
}
