##rules of Pig Latin:

  ##make way for user to input information

  ##have the out put be displayed

  ##add business logic to do nothing for non-alphabetical characters

  ## The program does nothing to non-alphabetical characters, since they do ##not contain consonants or vowels.
  ##    * Example Input: 3
  ##    * Example Output: 3
  ##* .1-The program adds “ay" to single-letter words beginning with a vowel.
  ##    * Example Input: i
  ##    * Example Output: iway


  ##* 1. For words beginning with a vowel, add “ay" to the end.
  ##* input: apple
  ##* output: appleway
  ##* 2. For words beginning with one or more consonants, move all of the ##first consecutive consonants to the end, and add "ay".
  ##* input:translate
  ##* output:anslatetray
  ## 3. For words beginning with "y", treat "y" as a consonant.
  ##* input:your
  ##* output:ouryay 
  ##*
  ##*  
  ##* 4.  If the first consonants include "qu", move the "u" along with the ##"q". Don't forget about words like "squeal" where "qu" doesn't come first!
  ##* input:squeal
  ##* output: ealsquay 
  ##input : Pig Latin Translator
  ##output : igPay atinLay anslatorTray
