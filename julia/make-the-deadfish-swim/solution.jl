# https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function deadfish(commands, value=0, outputs=[])
  if length(commands) == 0
    outputs
  else
    c = commands[1]

    if c == 'i'
      value += 1
    elseif c == 'd'
      value -= 1
    elseif c == 's'
      value *= value
    elseif c == 'o'
      push!(outputs, value)
    end

    deadfish(commands[2:end], value, outputs)
  end
end

