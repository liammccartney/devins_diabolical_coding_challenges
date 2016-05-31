require_relative "../prefill"

describe "prefill" do
    it "should work for integers" do
        expect(prefill(3, 1)).to eq([1,1,1])
    end

    it "should work for strings" do
        expect(prefill(2, "abc")).to eq(["abc", "abc"])
    end

    it 'should work recursively' do
        expect(prefill(3, prefill(2, '2d'))).to eq([['2d','2d'],['2d','2d'],['2d','2d']]);
    end

    it 'should through a TypeError if inputs are bad' do
        expect(prefill("xyz", 1)).to eq(new TypeError('you idiot'));
    end

    it 'should work if v is undefined' do
        expect(prefill(2)).to eq([nil, nil]);
    end
end
