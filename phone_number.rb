=begin
Write a function that accepts a string, and returns true if it is in the form of a phone number. 
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses
=end

def is_phone_number?(string)
    /\(\d{3}\)\s{1}\d{3}-\d{4}/.match(string).to_s.length == string.length
end

puts is_phone_number?("(123) 456-7890") == true
puts is_phone_number?("(123) 456-7890  ") == false
puts is_phone_number?("(123)456-7890") == false
puts is_phone_number?("(1111)555 2345") == false
puts is_phone_number?("(098) 123 4567") == false
