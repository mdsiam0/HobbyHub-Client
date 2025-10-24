import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import Spinner from "../components/Spinner";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? { ...currentUser } : null);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, setUser, logOut, loading }}>
      {loading ? <Spinner></Spinner> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
