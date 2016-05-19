def ip_to_int32 (ip)
    ip.split('.').map{|s| s.to_i.to_s(2).rjust(8,'0')}.reduce(:+).to_i(2)
end
