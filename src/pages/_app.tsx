import "../../public/styles/global.scss";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { GoogleTagManager } from '@next/third-parties/google'

const client = new ApolloClient({
  uri: "https://wordpress.bananacreative.tech/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-TPG2SMSV"/>
    </ApolloProvider>
  );
}
