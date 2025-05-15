require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set

-- map("i", "jk", "<ESC>")
map("t", "<ESC>", "<C-\\><C-n>", { desc = "ESC terminal normal mode", noremap = true })

-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")
