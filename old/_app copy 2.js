import App from 'next/app'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import LayoutWrapper from '../layout/layout-wrapper'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    )
  }
}
