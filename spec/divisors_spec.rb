require_relative '../divisors'
describe DivisorFinder do
    let (:divisor_finder) { DivisorFinder.new }
    describe '#find_divisors' do
        it 'should return an array of divisors' do
            expect(divisor_finder.find_divisors(12)).to eq([2,3,4,6])
            expect(divisor_finder.find_divisors(25)).to eq([5])
        end

        it 'should return a string if there are no divisors' do
            expect(divisor_finder.find_divisors(13)).to eq("13 is prime")
        end
    end
end
