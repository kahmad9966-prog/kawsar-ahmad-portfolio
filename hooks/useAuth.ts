"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/firebase/config";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>(
    isFirebaseConfigured ? "loading" : "unauthenticated"
  );

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) return;
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setStatus(u ? "authenticated" : "unauthenticated");
    });
    return () => unsub();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error(
        "Firebase isn't configured yet. Add your Firebase keys to .env.local to enable authentication."
      );
    }
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signup = useCallback(
    async (fullName: string, email: string, password: string) => {
      if (!isFirebaseConfigured || !auth) {
        throw new Error(
          "Firebase isn't configured yet. Add your Firebase keys to .env.local to enable authentication."
        );
      }
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: fullName });

      // Notify the site owner server-side (never expose email credentials client-side).
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          registeredAt: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      }).catch(() => {
        // Non-blocking: registration should succeed even if the notification fails.
      });
    },
    []
  );

  const logout = useCallback(async () => {
    if (!isFirebaseConfigured || !auth) return;
    await signOut(auth);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error(
        "Firebase isn't configured yet. Add your Firebase keys to .env.local to enable authentication."
      );
    }
    await sendPasswordResetEmail(auth, email);
  }, []);

  return { user, status, login, signup, logout, resetPassword, isFirebaseConfigured };
}
