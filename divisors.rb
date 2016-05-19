class DivisorFinder
    def find_divisors(number)
        divisors = collect_divisors(number)
        if divisors.empty?
            "#{number} is prime"
        else
            divisors
        end
    end
    def collect_divisors(number)
        (2...number).select do |divisor|
            is_divisible?(number, divisor)
        end
    end

    def is_divisible?(number, divisor)
        number % divisor == 0
    end
end
