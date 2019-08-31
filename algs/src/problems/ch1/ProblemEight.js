//zero matrix
/*
If a row in a matrix contains a 0, make that row and column all zeros
Do not write it such that the entire matrix becomes all zeros.


Main technique: use booleans to flag where zero is positioned.
*/ 


let nullifyRow = (matrix, row) => {
    console.log("NULLIFYING")
    for(let j = 0; j < matrix[0].length; j++)
        matrix[row][j] = 0;
    
}   

let nullifyColumn = (matrix, column) =>{
    console.log("ENTERED>..")
    console.log("NULLIFYING")

    for(let i = 0; i < matrix.length; i++){
        matrix[i][column] = 0;
    }
}

let ProblemEight = (matrix) =>{
    let row  = Array(matrix.length); //keeps track of what row 0 occurs in
    let column = Array(matrix[0].length) //keeps track of what column 0 occurs in

    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == 0){
                row[i] = true;
                column[j] = true;
            }
        }
    } //map out positions


    //Go through the row
    //If you find a T value, release the 0s in the matrix
    for(let i = 0; i < row.length; i++)
        if(row[i]) nullifyRow(matrix, i); //make each j in row i a 0

    //Go through the column
    //If you find a T value, release the 0s in the matrix
    for(let j = 0; j < column.length; j++){
        console.log("ENTERING...")

        if(column[j]) nullifyColumn(matrix, j) //make each i at column j a 0

    }
    
    return matrix;


}


export default ProblemEight;