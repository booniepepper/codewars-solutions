# https://www.codewars.com/kata/51e0007c1f9378fa810002a9

def parse commands
  value = 0
  outputs = []
  
  commands.chars.each do |command|
    case command
      when 'i' then value += 1
      when 'd' then value -= 1
      when 's' then value *= value
      when 'o' then outputs << value
    end
  end
  
  outputs
end

