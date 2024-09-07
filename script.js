const input =   document.getElementById('input');
const output =  document.getElementById('output');
const alfabet = 
[
    ['a','b','c','d','e','f'],
    ['g','h','i','j','k','l'],
    ['m','n','o','p','q','r'],
    ['s','t','u','v','w','x'],
    ['y','z',' ']
];

const convert = (data) => {
    const text = Array.from(data);
    let output_nums = [];
    for(let l = 0; l < text.length; ++l){
        for(let i = 0; i < alfabet.length; ++i){
            for(let j = 0; j < alfabet[i].length; ++j){
                if (alfabet[i][j] == text[l]) {
                    console.log([text[l],i+1,j+1]);
                    output_nums.push(parseInt(String(i+1) + String(j+1)));
                }
            }
        }
    }
    output.value = output_nums;
}

const decode = (data) => {
    console.log(data);
    try {
        const nums = data.split(/,|\s+/);
        let output_text = [];
        for(let i = 0; i < nums.length; ++i){
            let coords = nums[i].split("");
            output_text.push(alfabet[coords[0]-1][coords[1]-1]);
        }
        console.log(output_text);
        input.value = output_text.join('');
    }catch {
        alert('No valid data');
    }
}

document.getElementById('convert').addEventListener('click', () => {
    convert(input.value);
});

document.getElementById('deconvert').addEventListener('click', () => {
    decode(output.value);
});