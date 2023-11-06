import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(sentence: string): string {
    if(sentence){
      let convertedSentence = sentence[0].toUpperCase() + sentence.substring(1).toLowerCase()

      return convertedSentence
    }else{
      return sentence
    }
  }

}



'this is a chair'