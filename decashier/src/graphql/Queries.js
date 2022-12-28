import { gql, useQuery } from "@apollo/client";

export const Products = gql`
  query MyQuery {
    Decashier_products {
      id
      id_category
      gambar
      nama
      kode
      harga
      is_ready
    }
  }
`;

export const Category = gql`
query MyQuery {
    Decashier_categories {
      id
      nama
`;
