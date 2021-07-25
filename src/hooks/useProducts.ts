import useSWR from "swr";

function useFetchActiveProducts() {
  const { data, error } = useSWR(
		`${process.env.REACT_APP_API_URL}/api/products/active`
	);

  return {
    products: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export { useFetchActiveProducts };
