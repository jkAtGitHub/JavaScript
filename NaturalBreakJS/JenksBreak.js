A = [347, 844, 1296, 2115, 3254, 3363, 3591, 9271, 9957, 10655, 17331, 18471, 19992, 20614, 21252, 25281, 25946, 27264, 29521, 29882, 31147, 35592, 39776, 41505, 44328, 46979, 56821, 61685, 62679, 63689, 78050, 83886];

getJenksBreaks(A, 4);

function getJenksBreaks(listOfValues, noOfBreaks) {
    var breakValues = [];
    var mat1 = [];
    var mat2 = [];

    var valueListLength = listOfValues.length;
    listOfValues = listOfValues.sort(function (a, b) {
        return a - b
    });

    for (var rowCount = 0; rowCount < valueListLength + 1; rowCount++) {
        mat1[rowCount] = [];
        mat2[rowCount] = [];
        for (var colCount = 0; colCount < noOfBreaks + 1; colCount++) {
            mat1[rowCount][colCount] = NaN;
            mat2[rowCount][colCount] = NaN;
        }
    }

    for (var k = 1; k < noOfBreaks + 1; k++) {
        mat1[1][k] = 1;
        mat2[1][k] = 0;
        for (var l = 2; l < valueListLength + 1; l++) {
            mat2[l][k] = Infinity;
        }
    }


    for (var i = 1; i < noOfBreaks + 1; i++) {

        mat1[1, i] = 1;
        mat2[1, i] = 0;
        for (var j = 2; j <= valueListLength; j++) {
            mat1[j] = [];
            mat2[j] = [];
            mat2[j, i] = Infinity;
        }
    }
    var str = '';
    mat2.foreach(function(row){str += row.join(' ');});
    alert(str);

} */

/*

    var ssd = 0;
    for (var rangeEnd = 2; rangeEnd < valueListLength + 1; rangeEnd++) {
        var sumX = 0;
        var sumX2 = 0;
        var w = 0;
        var dataId;
        for (var m = 1; m < rangeEnd + 1; m++) {
            var dataId = rangeEnd - m + 1;
            var val = listOfValues[dataId - 1];
            sumX2 += val * val;
            sumX += val;
            w++;
            ssd = sumX2 - (sumX * sumX) / w;
            alert("1");
            for (var j = 2; j < noOfBreaks + 1; j++) {
                alert("2");
                if (!(mat2[rangeEnd][j] < (ssd + mat2[dataId - 1][j - 1]))) {
                    mat1[rangeEnd][j] = dataId;
                    mat2[rangeEnd][j] = ssd + mat2[dataId - 1][j - 1];
                    alert("3");
                }
            }
        }
        mat1[rangeEnd][1] = 1;
        mat2[rangeEnd][1] = ssd;
        alert("4");
    }

    var k = valueListLength;
    for (var j = sClassCount; j >= 2; j--) {
        var id = Math.abs((mat1[k][j]) - 2);
        breakValues[j - 2] = listOfValues[id];
        k = Math.abs(mat1[k][j] - 1);
    }


    alert(breakValues);
}
