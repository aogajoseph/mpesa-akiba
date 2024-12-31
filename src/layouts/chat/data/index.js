// Chat Component Data

export const contacts = [
  {
    id: 1,
    name: "Angela",
    avatar: "", // You can provide a URL to the avatar image
    lastMessage: "Thanks Dad, I will send...",
    online: true,
    messages: [
      { content: "Hi Angie, are you still working on the project?", isSender: true },
      { content: "I know you're doing a great job. Keep up the good work.", isSender: true },
      { content: "Thanks Dad, I will send the draft by the end of the day.", isSender: false },
    ],
  },
  {
    id: 2,
    name: "Don",
    avatar: "", // You can provide a URL to the avatar image
    lastMessage: "Daddy, I am thinking...",
    online: false,
    messages: [
      { content: "Hi Olivia, I am thinking about taking a vacation.", isSender: false },
      { content: "That sounds exciting, Katherine!", isSender: true },
    ],
  },
  {
    id: 3,
    name: "Martha",
    avatar: "", // You can provide a URL to the avatar image
    lastMessage: "Hey!",
    online: true,
    messages: [
      { content: "Hey!", isSender: false },
      { content: "Hi Phoenix, how are you?", isSender: true },
    ],
  },
  {
    id: 4,
    name: "Jose (You",
    avatar: "", // You can provide a URL to the avatar image
    lastMessage: "Sent",
    online: false,
    messages: [
      {
        content: "Hey Olivia, I was thinking about doing some home improvement work.",
        isSender: false,
      },
      { content: "That's a great idea, Eleanor!", isSender: true },
    ],
  },
];
