require_relative '../rot13'

describe 'unscramble' do
    it 'should work' do
        expect(unscramble("EBG13 rknzcyr.")).to eq("ROT13 example.")
        expect(unscramble("This is my first ROT13 excercise!")).to eq("Guvf vf zl svefg EBG13 rkprepvfr!")
    end
end
