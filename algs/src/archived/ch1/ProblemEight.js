import { FORMERR } from "dns";

class ProblemEight{

    //write an algorithm such that if an element in an MxN matrix is 0
    // the row and column gets set to 0
    constructor(){
      

    }


    //This is a space problem and how you utilize space given an 2D array.
    zeroMatrix(matrix){
      let rowHasZero = false;
      let colHasZero = false;

      //Check if row has Zero. O(P(n))
      //
      for(let j = 0; j < matrix[0].length; j++){
          if(matrix[0][j] == 0){
              rowHasZero = true;
              break;
          }
      }


      //Check i first col has a zero
      for(let i = 0; i < matrix.length;i++){
            if(matrix[i][0] == 0){
                colHasZero = true;
                break;
            }
      }

      //Check for zeros in the rest of the array
      for(let i = 1; i < matrix.length; i++){
            for(let j = 1;  j<matrix[0].length; j++){
                if(matrix[i][j]==0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
      }
      

      for(let i = 1; i < matrix.length; i++){
          if(matrix[i][0] == 0){
              this.nullifyRow(matrix, i);
          }
      }

      for(let j =1; j< matrix[0].length; j++){
          if(matrix[0][j] == 0){
              this.nullifyColumn(matrix,j);
          }
      }


      if(rowHasZero){
          this.nullifyRow(matrix, 0);
      }

      if(colHasZero){
          this.nullifyColumn(matrix, 0);
      }

      return matrix;
    }

    nullifyRow(matrix, row){
        for(let j = 0; j<matrix[0].length; j++){
            matrix[row][j] = 0;
        }
    }

    nullifyColumn(matrix, col){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][col] = 0;
        }
        
    }

}

export default ProblemEight;