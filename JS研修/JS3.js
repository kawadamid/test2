/*関数enにはhankeiの要素があり、
関数の内容は「面積はhankei×hankei×3.14です」
hankeiの要素がそれぞれ５．７．１０の場合を書き改行します */
function en(hankei){
    return"面積は"+hankei*hankei*3.14+"cm^2です。";
}
document.write(en(5)+"<br>");
document.write(en(7)+"<br>");
document.write(en(10)+"<br>");


document.write("<br><br>");
/*関数yuuentiにはotonaとkodomoの要素があり、
関数の内容は「otona+kodomo」
A,B,Cグループそれぞれのotona,kodomoの数により、円を書き足し改行します
 */
function yuuennti(otona,kodomo){
    return(otona*500)+(kodomo*200);
}
document.write("Aグループ"+yuuennti(2,4)+"円<br>");
document.write("Bグループ"+yuuennti(1,5)+"円<br>");
document.write("Cグループ"+yuuennti(3,7)+"円<br>");
