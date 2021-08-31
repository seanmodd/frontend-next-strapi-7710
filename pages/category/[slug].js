import Articles from "../../components/blog/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/blog/layout"
import Seo from "../../components/blog/seo"
import { Box } from "@chakra-ui/react"

// const Category = ({ category, categories }) => {
const Category = () => {
  // const seo = {
  //   metaTitle: category.name,
  //   metaDescription: `All ${category.name} articles`,
  // }

  return (
    // <Layout categories={categories}>
    <Layout>
      {/* <Seo seo={seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <Box mb="30px"> */}
            {/* <h1>{category.name}</h1> */}
            <h1>Slug Page</h1>
          {/* </Box> */}
          {/* <Articles articles={category.articles} /> */}
          <Articles />
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const categories = await fetchAPI("/categories")

//   return {
//     paths: categories.map((category) => ({
//       params: {
//         slug: category.slug,
//       },
//     })),
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }) {
//   const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
//   const categories = await fetchAPI("/categories")

//   return {
//     props: { category, categories },
//     revalidate: 1,
//   }
// }

export default Category
