import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Box
     backgroundColor="rgba(17, 17, 11, 0.4)"
paddingTop="20px"
      backgroundImage="linear-gradient(rgba(3, 3, 3, 0.4),
rgba(16, 16, 17, 0.4)
    )"
    >
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <Text
height="50%"
textAlign="center"
margin="20px"
fontWeight="bold"
color="white"
fontSize="24px"
      >
        <div>Keep your contacts safe!</div>
      </Text>
    </Box>
  );
}
