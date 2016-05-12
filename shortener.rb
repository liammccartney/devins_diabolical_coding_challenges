=begin
Write a function to compress string "aabcaaaaade" to "aabc5xade".
This should also work for other strings. Only compress if it shortens the string.
5xa means char a is repeated 5 times.
=end

def shorten(string)
    chunks = string.chars.chunk{|char| char}.map{|char, consecutive| consecutive }
    chunks.map.with_index do |chunk, index|
        replacement = "#{chunk.length}x#{chunk[0]}"
        replacement.length < chunk.length ? replacement : chunk
    end.flatten.join()
end



puts shorten('aabdcaaaaade') == 'aabdc5xade'
puts shorten('aabdcaaaaadeeeee') == 'aabdc5xad5xe'
puts shorten('aabbbbdcaaaaadeeeee') == 'aa4xbdc5xad5xe'
puts shorten('aabbbbdcaaaaadeeeeeeeeee') == 'aa4xbdc5xad10xe'
puts shorten('aaaabbbbdcaaaaad') == '4xa4xbdc5xad'
