function multiplicationTable() {

    const bodyElem = document.getElementById('content');
    const cols = 10;
    const rows = 10;

    for (var i = 0; i <= cols; i++) {

        const elemnt = document.createElement("tr");

        bodyElem.appendChild(elemnt);

        let result = '';

        for (var j = 0; j <= rows; j++) {
            
            if(i === 0 || j === 0){
                result = i + j;
            }

            else {result = i * j;}

            const m = document.createElement("td");

            m.textContent = result;

            elemnt.appendChild(m);
        }
    }
}

multiplicationTable()