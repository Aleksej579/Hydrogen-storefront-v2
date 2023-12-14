import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';

export const meta = () => {
  return [{title: 'Clever Device 4U | Home'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const allCollections = await storefront.query(ALL_COLLECTIONS_QUERY);
  const productLeftImage = await storefront.query(PRODUCT_LEFT_IMAGE_QUERY);
  return defer({
    featuredCollection, 
    recommendedProducts,
    allCollections,
    productLeftImage
  });
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <FeaturedCollection collection={data.featuredCollection} />
      <AllCollections collection={data.allCollections} />
      <ProductLeftRightImage products={data.productLeftImage} />
      <RecommendedProducts products={data.recommendedProducts} />
    </div>
  );
}

function AllCollections() {
  const {allCollections} = useLoaderData();
  const allCollectionsArr = allCollections.collections.nodes;

  return (
    <ul className ='all_collections flex gap-4 mb-8'>
      {allCollectionsArr.map((collection) => (
        <li className='relative border aspect-square h-fit w-1/4 mb-0 group' key={collection.id}>
          <h1 className='absolute top-1/2 left-1/2 m-0 text-white -translate-y-2/4 -translate-x-2/4 text-base z-[1] group-hover:text-black'>{collection.title}</h1>
          <Link
            className=""
            to={`/collections/${collection.handle}`}
          >
            {collection.image && (
              <div className="aspect-square group-hover:opacity-50">
                <Image data={collection.image} sizes="100vw" className='!aspect-square' />
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FeaturedCollection({collection}) {
  const image = collection.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1 className='absolute top-1/2 left-1/2 m-0 text-[#17224F]/[.5] -translate-y-2/4 -translate-x-2/4 text-4xl'>{collection.title}</h1>
    </Link>
  );
}

function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

function ProductLeftRightImage({products}) {
  return (
    <div className='mb-12'>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div>
              {products.nodes.map((product) => (
                <Link
                  className='flex w-2/3 mx-auto last:flex-row-reverse border first:mb-8 hover:drop-shadow-xl'
                  key={product.id}
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                    className='!w-1/2'
                  />
                  <h4 className='!w-1/2 bg-black text-white flex items-center p-5 m-0'>{product.description}</h4>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const PRODUCT_LEFT_IMAGE_QUERY = `#graphql
  fragment ProductLeftImage on Product {
    id
    title
    handle
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query ProductLeftImage ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 2, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...ProductLeftImage
      }
    }
  }
`;

const ALL_COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 10, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`;