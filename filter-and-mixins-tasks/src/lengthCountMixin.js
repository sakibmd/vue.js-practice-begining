export const lengthCountMixins = {
    computed: {
        length(){
             return this.secondText + ' (' +  this.secondText.length + ')' ;
        }
     }
}