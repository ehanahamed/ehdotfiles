require "nvchad.options"

-- add yours here!
local o = vim.o
o.cursorlineopt = 'both' -- to enable cursorline!

local autocmd = vim.api.nvim_create_autocmd

autocmd("VimEnter", {
  -- `--password` has limited permissions, this is NOT a "real" password/secret
  command = ":silent !kitty @ --password=\"estrogen\" set-spacing padding=0 margin=0",
})

autocmd("VimLeavePre", {
  -- `--password` has limited permissions, this is NOT a "real" password/secret
  command = ":silent !kitty @ --password=\"estrogen\" set-spacing padding=20 margin=10",
})
