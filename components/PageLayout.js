import Link from "next/link"
import { SimpleGrid, Box, VStack } from "@chakra-ui/react"

function PageLayout({children}) {


  return (
    <VStack pt="50px">
{children}
    </VStack>

            
  )
}

export default PageLayout
