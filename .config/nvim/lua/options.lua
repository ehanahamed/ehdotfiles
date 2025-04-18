require "nvchad.options"

-- add yours here!
local o = vim.o
o.cursorlineopt = 'both' -- to enable cursorline!

local autocmd = vim.api.nvim_create_autocmd

autocmd("VimEnter", {
  -- `--password` has scoped permissions, this is a NOT-very-secret password
  command = ":silent !kitty @ --password=\"estrogen\" set-spacing padding=0 margin=0",
})

autocmd("VimLeavePre", {
  -- `--password` has scoped permissions, this is a NOT-very-secret password
  command = ":silent !kitty @ --password=\"estrogen\" set-spacing padding=20 margin=10",
})
