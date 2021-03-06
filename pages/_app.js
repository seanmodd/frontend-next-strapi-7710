import { theme } from 'styles/theme'
import App from 'next/app'
import Head from 'next/head'
import '../assets/css/style.css'
import { motion } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { createContext } from 'react'
import { Provider } from 'next-auth/client'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import Navbar from '../components/Navbar'
import PageLayout from '../components/PageLayout'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps, router }) => {
  const { global } = pageProps
  console.log('Here is the session: ', pageProps)
  console.log('Here is the session: ', pageProps.session)
  console.log('Here is global aka pageProps: ', global)
  // console.log('Here is the global.favicon of getStrapiMedia: ', global.favicon)
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}
        </Head>
        <Provider session={pageProps.sesson}>
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
              <Navbar />
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </motion.div>
          </GlobalContext.Provider>
        </Provider>
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
  const global = await fetchAPI('/global')
  // Fetch all media from Strapi
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp

//! ORIGINAL IS BELOW.
// import { theme } from "styles/theme"
// import App from "next/app"
// import Head from "next/head"
// import "../assets/css/style.css"
// import { motion } from "framer-motion"
// import { ChakraProvider } from "@chakra-ui/react"
// import { createContext } from "react"
// import { fetchAPI } from "../lib/api"
// import { Provider } from "next-auth/client"
// import { getStrapiMedia } from "../lib/media"
// import Navbar from "../components/Navbar"
// import PageLayout from "../components/PageLayout"

// // Store Strapi Global object in context
// export const GlobalContext = createContext({})

// const MyApp = ({ Component, pageProps, router }) => {
//   const { global } = pageProps

//   return (
//     <>
//       <ChakraProvider resetCSS theme={theme}>
//         <Head>
//           <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
//         </Head>
//         <Provider session={pageProps.sesson}>
//           <GlobalContext.Provider value={global}>
//             <motion.div
//               key={router.route}
//               initial="pageInitial"
//               animate="pageAnimate"
//               variants={{
//                 pageInitial: {
//                   scale: 1.2,
//                   opacity: 0,
//                 },
//                 pageAnimate: {
//                   scale: 1,
//                   opacity: 1,
//                 },
//               }}
//             >
//               <Navbar />
//               <PageLayout>
//               <Component {...pageProps} />
//               </PageLayout>
//             </motion.div>
//           </GlobalContext.Provider>
//         </Provider>
//       </ChakraProvider>
//     </>
//   )
// }

// // getInitialProps disables automatic static optimization for pages that don't
// // have getStaticProps. So article, category and home pages still get SSG.
// // Hopefully we can replace this with getStaticProps once this issue is fixed:
// // https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx)
//   // Fetch global site settings from Strapi
//   const global = await fetchAPI("/global")
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global } }
// }

// export default MyApp
