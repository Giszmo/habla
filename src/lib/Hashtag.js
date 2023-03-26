import { useNavigate } from "react-router-dom";
import { Flex, Tag } from "@chakra-ui/react";

export function Hashtags({ hashtags }) {
  return (
    <Flex mt={4} flexWrap="wrap">
      {hashtags.map((t) => (
        <Hashtag key={t} mr={2} mb={2} tag={t} />
      ))}
    </Flex>
  );
}

export default function Hashtag({ tag, ...rest }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/t/${tag}`);
  };
  return (
    <Tag
      key={tag}
      cursor="pointer"
      color="white"
      background="purple.500"
      size="lg"
      borderRadius="full"
      fontSize="sm"
      onClick={onClick}
      {...rest}
    >
      {tag}
    </Tag>
  );
}
