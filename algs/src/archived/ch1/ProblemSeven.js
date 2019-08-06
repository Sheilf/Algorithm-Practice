class ProblemSeven{

    constructor(matrix){
        this.matrix = matrix;
    }

    //rotate a matrix 90 degrees
    //Image represents an NxN pixel matrix
    //each pixel in the image is 4 bytes.


    //The easiest way is to rotate in layers.
    //Top -> Right, Right -> Bottom, Bottom -> Left, Left -> Top
    //4 way swap.
    //Swap by index.
    
    

    rotateMatrix(){
        
        let matrix = this.matrix;
        for(let i =0; i < matrix.length; i++){
            if(matrix.length == 0 || matrix.length != matrix[0].length) return false;

            let n = matrix.length;

            for(let layer = 0; layer < n/2; layer++){
                let first = layer;
                let last = n - 1 - layer;
                for(let i = first; i < last;i++){
                    let offset = i - first;
                    let top = matrix[first][i]; //temp

                    //L->T
                    matrix[first][i] = matrix[last-offset][first]

                    //B -> L
                    matrix[last-offset][first] = matrix[last][last-offset];
                    
                    //R -> B
                    matrix[last][last-offset] = matrix[i][last];

                    //T -> R
                    matrix[i][last] = top;

                }
            }
     

        }
       
        return true;
    }


}

export default ProblemSeven;