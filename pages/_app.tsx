import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '@/models/layouts'
import Header from '@/compoment/Header'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper  = Component.Layout ?? Header
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
