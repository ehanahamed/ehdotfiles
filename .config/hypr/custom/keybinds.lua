-- WASD focus
hl.bind("SUPER + A", hl.dsp.focus({ direction = "l" }), { description = "Window: Focus left" })
hl.bind("SUPER + D", hl.dsp.focus({ direction = "r" }), { description = "Window: Focus right" })
hl.bind("SUPER + W", hl.dsp.focus({ direction = "u" }), { description = "Window: Focus up" })
hl.bind("SUPER + S", hl.dsp.focus({ direction = "d" }), { description = "Window: Focus down" })

-- WASD move
hl.bind("SUPER + SHIFT + A", hl.dsp.window.move({ direction = "l" }), { description = "Window: Move left" })
hl.bind("SUPER + SHIFT + D", hl.dsp.window.move({ direction = "r" }), { description = "Window: Move right" })
hl.bind("SUPER + SHIFT + W", hl.dsp.window.move({ direction = "u" }), { description = "Window: Move up" })
hl.bind("SUPER + SHIFT + S", hl.dsp.window.move({ direction = "d" }), { description = "Window: Move down" })

-- Follow mouse toggle
hl.bind("SUPER + BackSpace", hl.dsp.exec_cmd("hyprctl keyword input:follow_mouse 0"), { description = "Disable follow mouse" })
hl.bind("SUPER + SHIFT + BackSpace", hl.dsp.exec_cmd("hyprctl keyword input:follow_mouse 1"), { description = "Enable follow mouse" })

-- Special workspace (scratchpad) with grave/tilde key
hl.bind("SUPER + SHIFT + grave", hl.dsp.window.move({ workspace = "special:special", follow = false }), { description = "Window: Send to scratchpad" })
hl.bind("SUPER + ALT + grave", hl.dsp.window.move({ workspace = "special:special", follow = false }), { description = "Window: Send to scratchpad (alt)" })
hl.bind("SUPER + grave", hl.dsp.workspace.toggle_special("special"), { description = "Workspace: Toggle scratchpad" })
