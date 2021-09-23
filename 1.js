const txtElement = ['Freelancer','Full-stack developer','web developer','Graphic Desaigner'];
let count = 0;
let txtIndex = 0;
let currenTxT='';
let words = '' ;

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentxt = txtElement[count];

    words = currenTxT.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currenTxT.length){
        count++;
        txtIndex=0;
    }
    setTimeout(ngetik,500);
    
})();