import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react";
import Layout from "@/components/layout";
import { AuthProvider } from '@/AuthContext';
import  { Figtree } from "@next/font/google";

const figtree = Figtree( {
      subsets: ['latin']

    }
)
export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined
        ? require('bootstrap/dist/js/bootstrap')
        : null
  }, [])

  return (
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
  );
}