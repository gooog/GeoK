  function  langInput(e){ 
        var eng = ['a', 'b', 'g', 'd', 'e', 'v', 'z', 'T', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'J', 'r', 's', 't', 'u', 'f', 'q', 'R', 'y', 'S', 'C', 'c', 'Z', 'w', 'W', 'x', 'j', 'h'];
        var geo = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'];

            var cursorStartPos = e.target.selectionStart;
            var cursorEndPos = e.target.selectionEnd;
           
            var c = String.fromCharCode(e.which);
            var inputVal = e.target.value;

            var leftSide = inputVal.slice(0, cursorStartPos);
            var rightSide = inputVal.slice(cursorStartPos+(cursorEndPos-cursorStartPos), inputVal.length);
            var enteredChar = (geo[eng.indexOf(c)] || c);

            e.target.value = leftSide+enteredChar+rightSide;

            e.target.selectionStart = cursorStartPos+1;
            e.target.selectionEnd = cursorStartPos+1;
            e.preventDefault(); 
			return;
    }