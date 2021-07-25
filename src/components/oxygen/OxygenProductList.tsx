import React from "react";
import {
  Heading,
  Box,
  Text,
  CircularProgress,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

// API & stores
import { useFetchActiveMarkers } from "src/hooks/useMarkers";

const OxygenProductList = () => {
  const {
    coordinates: data,
    isLoading,
    isError,
  }: any = useFetchActiveMarkers();

  const RenderOxygenList = ({ item }: any) => {
    return (
      <Box p={2} mt={2}>
        <Heading as="h5" size="sm">
          {item.title}
        </Heading>
        <Text>{item.address}</Text>

        {item.phoneNumbers.map((number: string) => (
          <Flex
            key={number}
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
            <Text fontWeight="bold" color="gray.500">
              {number}
            </Text>
            <IconButton
              colorScheme="teal"
              aria-label="Call Service"
              size="sm"
              isRound
              onClick={() => window.open(`tel:${number}`)}
              icon={<PhoneIcon />}
            />
          </Flex>
        ))}
      </Box>
    );
  };

  return (
    <Box p={2} bgColor="white" mt={4}>
      <Heading as="h4" size="md">
        အောက်စီဂျင်နှင့် ဆက်စပ်ပစ္စည်းများ
      </Heading>
      {isError ? (
        <Text align="center" my="10">
          Cannot fetch data
        </Text>
      ) : isLoading ? (
        <CircularProgress isIndeterminate color="green.300" />
      ) : data.length === 0 ? (
        <Text align="center" color="gray.400">
          လက်ရှိ အောက်စီဂျင်ပေးသည့်နေရာများ မတွေ့ရှိသေးပါ။
        </Text>
      ) : (
        <React.Fragment>
          {data.map((item: any, i: number) => (
            <RenderOxygenList key={i} item={item} />
          ))}
        </React.Fragment>
      )}
    </Box>
  );
};

export default OxygenProductList;
