import { theme } from "styles/theme"
import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { motion } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps, router }) => {
  const { global } = pageProps

  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        {/* <ChakraProvider resetCSS> */}
        <Head>
          <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        </Head>
        <GlobalContext.Provider value={global}>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                scale: 1.2,
                opacity: 0,
              },
              pageAnimate: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </GlobalContext.Provider>
      </ChakraProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
