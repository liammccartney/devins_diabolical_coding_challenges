def unscramble string
    string.chars.map do |char|
        char.upcase == char ? rot13(char).upcase : rot13(char)
    end.join
end

def rot13 letter
    alphabet = ('a'..'z').to_a
    index = alphabet.index(letter.downcase)

    return letter if index.nil?

    cipher_index = index + 13
    if cipher_index >= alphabet.length
        cipher_index = cipher_index - alphabet.length
    end
    alphabet[cipher_index]
end
