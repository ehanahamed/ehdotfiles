require "nvchad.options"

local o = vim.o
o.cursorlineopt = 'both' -- to enable cursorline!

vim.opt["tabstop"] = 4
vim.opt["shiftwidth"] = 4
vim.g.neovide_cursor_vfx_mode = {"wireframe"}
vim.opt.relativenumber = true

vim.api.nvim_create_autocmd("BufDelete", {
  callback = function()
    local bufs = vim.t.bufs
    if #bufs == 1 and vim.api.nvim_buf_get_name(bufs[1]) == "" then
      vim.cmd "Nvdash"
    end
  end,
})
