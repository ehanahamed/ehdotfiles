return {
  {
    "stevearc/conform.nvim",
    -- event = 'BufWritePre', -- uncomment for format on save
    opts = require "configs.conform",
  },

  {
    "neovim/nvim-lspconfig",
    config = function()
      require "configs.lspconfig"
    end,
  },
  {
    "tpope/vim-repeat",
    lazy = false
  },
  {
    "ggandor/leap.nvim",
    lazy = false,
    config = function ()
      require("leap").add_default_mappings()
    end
  },
  {
    "tpope/vim-surround",
    lazy = false
  }
  -- These are some examples, uncomment them if you want to see them work!

  -- test new blink
  -- { import = "nvchad.blink.lazyspec" },

  -- {
  -- 	"nvim-treesitter/nvim-treesitter",
  -- 	opts = {
  -- 		ensure_installed = {
  -- 			"vim", "lua", "vimdoc",
  --      "html", "css"
  -- 		},
  -- 	},
  -- },
}
