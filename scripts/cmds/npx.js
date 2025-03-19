const axios = require("axios");

module.exports = {
  config: {
    name: "npx",
    version: "2.0",
    author: "Joy-Ahmed",
    countDown: 5,
    role: 0,
    shortDescription: "Send videos based on emoji",
    longDescription: "Replies with different videos based on the emoji sent.",
    category: "no prefix",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const validEmojis = ["😗", "🙂"];
    if (!validEmojis.includes(event.body)) return;

    try {
      const { data } = await axios.get("https://joyapi.onrender.com/random");
      if (!data.video) return message.reply("");

      message.reply({ body: "𝙱 𝙾 𝚃—͟͞͞ᴍꫝɪɴ ꫝᴅᴍɪɴ\n\n\n—͟͞͞ɴiនꫝɴ✘Ꭼᴅɪᴛᴢ ⸙", attachment: await global.utils.getStreamFromURL(data.video) });
    } catch {
      message.reply("");
    }
  },
};
