const list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

function calculateMode(list){
    const listCount = {};

    list.map(
        function(elemento){
            if (listCount[elemento]){
                listCount[elemento] += 1;
            } else {
                listCount[elemento] = 1;
            }
        }
    );

    const listArray = Object.entries(listCount).sort(
        function (elementA, elementB){
            return elementA[1] - elementB[1];
        }
    );

    const mode = listArray[listArray.length - 1];
    return mode;
}
// Calculate mode()
