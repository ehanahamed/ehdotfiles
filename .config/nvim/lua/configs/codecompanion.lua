return {
  strategies = {
    chat = {
      adapter = "gemini",
    },
    inline = {
      adapter = "gemini",
    },
    cmd = {
      adapter = "gemini",
    },
  },
  adapters = {
    gemini = function()
      return require("codecompanion.adapters").extend("gemini", {
        env = {
          api_key = "cmd:cat /home/ehan/.localsecretsstuff/gemini-api-key",
        },
      })
    end,
  },
}
