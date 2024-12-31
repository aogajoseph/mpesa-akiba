import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const ChatContent = ({ messages }) => {
  return (
    <Box
      flex="1"
      overflow="auto"
      p={2}
      bgcolor="grey.100"
      display="flex"
      flexDirection="column"
      borderRadius="1px"
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent={message.isSender ? "flex-end" : "flex-start"}
          mb={1}
        >
          <Box
            p={1}
            bgcolor={message.isSender ? "info.main" : "grey.300"}
            color={message.isSender ? "#fff" : "black"}
            borderRadius="10px"
            maxWidth="70%"
          >
            <Typography variant="body2">{message.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

// Prop types validation
ChatContent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      isSender: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatContent;
